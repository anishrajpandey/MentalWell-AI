import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import axios from "axios";

export default function CheckboxList() {
  const [Users, setUsers] = useState([]);
  async function getAllUsers() {
    let res = await axios.get("http://localhost:5000/api/user/users");
    let sorted = res.data.users.sort(
      (item1, item2) => (item1.emotionalState - item2.emotionalState) * -1
    );

    setUsers((prev) => [ ...sorted]);
  }
  useEffect(() => {
    getAllUsers();
  }, []);
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className="w-fit mx-auto ">
      <List sx={{ width: 500, maxWidth: 500, bgcolor: "background.paper" }}>
        {Users.map((value) => {
          const labelId = value.name;

          return (
            <ListItem
              style={{
                border: "0.5px solid rgba(0,0,0,0.1)",
                marginBlock: "23px",
                borderRadius: "10px",
              }}
              key={value._id}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  {value.emotionalState > 5 && <div className="text-5xl">😄</div>}
                  {value.emotionalState == 5 && <div className="text-5xl">😐</div>}
                  {value.emotionalState < 5 && <div className="text-5xl">😟</div>}
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <img
                    src="/assets/placeholder.jpg"
                    alt=""
                    className="h-12 w-12 rounded-full"
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

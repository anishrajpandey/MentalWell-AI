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
    // sorted = [
    //   {
    //     _id: "65169f8d2e42789211674a0c",
    //     name: "fefdfdfdfd",
    //     email: "rish@gmail.com",
    //     password: "Sdsdsdsdsdsds",
    //     age: 3,
    //     emotionalState: 10,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "6516a301c4232bd6ba78677d",
    //     name: "ddddfdfdfdfd",
    //     email: "rish@gmail.com",
    //     password: "12345678",
    //     age: 22,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "6516abb2bcceca085c0a030a",
    //     name: "ddddfdfdfdfd",
    //     email: "risdddddh@gmail.com",
    //     password:
    //       "$2a$10$7fzojQqo/hfdjV.Kc3tpFeujqVug9VoDv2U12lePjsbL2cxRyngwG",
    //     age: 22,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "6516af0f91d8355095655389",
    //     name: "ddddfdfdfdfd",
    //     email: "risdddddh@gmail.com",
    //     password:
    //       "$2a$10$qNM0XbSOwXiI5o/mCqnqDugr6SJ5lvnHyf5e02M837dU9Z6EO9/0m",
    //     age: 22,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "6516af3ccab6a9bacc76f81f",
    //     name: "ddddfdfdfdfd",
    //     email: "risdddddh@gmail.com",
    //     password:
    //       "$2a$10$Y67OwkMPeTSnYD3pRENSAeL4.4BObaE.OAX0Cidj2/fioa6fe6B8S",
    //     age: 22,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "6516ebcafac138553c47f2b7",
    //     name: "ddddfdfdfdfd",
    //     email: "risdddd@gmail.com",
    //     password:
    //       "$2a$10$LQorE8lwlrP1w0EdT6gK3uQG/SkHNsDB26ofjIJE3n/V57N8M5wpi",
    //     age: 22,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "6516ecf12ef36abe0af8f103",
    //     name: "ddddfdfdfdfd",
    //     email: "risdd@gmail.com",
    //     password:
    //       "$2a$10$SNPYiCUNafM9piWx5u0FtOK2CD0EtmL3hu1A8PF7YUPm7bag63QJW",
    //     age: 22,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "6517114d1bf03791356b849a",
    //     name: "dsfs",
    //     email: "sdfds@df.comn",
    //     password:
    //       "$2a$10$Giw70JdEgpiyVXibaD2fZu/qds43rexJwYUyn.bhZmgjsUKvgfT6.",
    //     age: 3,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "65171364e1bcbc0509330eee",
    //     name: "my name is anish",
    //     email: "dsfsd@dsfg.co",
    //     password:
    //       "$2a$10$XD0pMbS3rMfMVUueAHGre.l5g/fsaq6ETGVgO0KR3XD1dRO5E0ZDm",
    //     age: 22,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "65171403e1bcbc0509330ef2",
    //     name: "Hello guys this is meeeee",
    //     email: "iamsexy@sixnine.com",
    //     password:
    //       "$2a$10$gVP9g2dwRjPaia2sNpr58uFlcy29H5WLxw61qkyTqInzubtmtRN2e",
    //     age: 69,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "65171611e1bcbc0509330ef6",
    //     name: "dsfd",
    //     email: "sdfds@dfds.dd",
    //     password:
    //       "$2a$10$Zzzq.AHGaz1nES1DucTALuJAIOcr9ZQPvlTdJ7X.axp0D4g3SoVC.",
    //     age: 2322,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "65171b6be1bcbc0509330efa",
    //     name: "dsfasdf",
    //     email: "sdsf@dsfdsf.fd",
    //     password:
    //       "$2a$10$WqBjWxbGViJQA8zbnxMFjecb58d/TsqtVj/qSLox30VoOl9I/GgrO",
    //     age: 33,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "65171c1ae1bcbc0509330f01",
    //     name: "dfdsf",
    //     email: "dsfds@DSFD.DD",
    //     password:
    //       "$2a$10$PeVeIeKW8WJ7keR5rzFEfeJ1oM.oUJLbMrP2c3c51hdIQSXfD9srK",
    //     age: 333,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "65171c36e1bcbc0509330f07",
    //     name: "dfdsf",
    //     email: "dsfds@DSFD.SADSADD",
    //     password:
    //       "$2a$10$wYSyyxpMwX6YlgyzQb53d.HT/tq7z3JdxaEXNuDcfwHuxNfBYb9Ou",
    //     age: 333,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "65171c59e1bcbc0509330f0c",
    //     name: "dfdsf",
    //     email: "ddsfdasfsfds@DSFD.SADSADD",
    //     password:
    //       "$2a$10$k6fNkOtepbk2ottiDPgreO0wYnFOF5uenwcs/.nCubc42MR2n3J.i",
    //     age: 333,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "65171d54e1bcbc0509330f10",
    //     name: "anish",
    //     email: "anish@gmail.com",
    //     password:
    //       "$2a$10$x0qfNNM1fUen5I8AD/W8xeOUetJZKekV5afn1Nojv89nIdHsg3kfy",
    //     age: 1,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "651720d0e1bcbc0509330f1c",
    //     name: "dfdd",
    //     email: "dd@d.dd",
    //     password:
    //       "$2a$10$qeLZgdYPIe83ylGfZlQPYO2omOqTsGGj1gYR1cZrCiXDqkLSsx5Ea",
    //     age: 3,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "651721e1e1bcbc0509330f28",
    //     name: "DSFADSF",
    //     email: "ASDS@DFD.DD",
    //     password:
    //       "$2a$10$6kLlUvEb1gMHIn0wJwvG.eKE3jM5u7LU8CMhiDaWreoRJPfrpKt/W",
    //     age: 33,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "651727761355876b386bff01",
    //     name: "dfdasf",
    //     email: "dd@fg.dd",
    //     password:
    //       "$2a$10$bFXa0Nshqdp4VHAjn5Bz2ekZ7hVQy0.gOkYPjgpxY.wXRjeQ.6HyS",
    //     age: 33,
    //     emotionalState: 5,
    //     userType: "user",
    //     __v: 0,
    //   },
    //   {
    //     _id: "6516ab666392f4e25d15ee45",
    //     name: "ddddfdfdfdfd",
    //     email: "rish@gmail.com",
    //     password: "12345678",
    //     age: 22,
    //     emotionalState: 1,
    //     userType: "user",
    //     __v: 0,
    //   },
    // ]; // setUsers(res.data.users);
    setUsers((prev) => [...prev, ...sorted]);
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
                  {value.emotionalState > 5 && <div>😄</div>}
                  {value.emotionalState == 5 && <div>😐</div>}
                  {value.emotionalState < 5 && <div>😟</div>}
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

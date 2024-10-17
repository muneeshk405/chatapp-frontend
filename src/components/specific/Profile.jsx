
import {
  CalendarMonth as CalendarIcon,
  Details,
  DetailsOutlined,
  DetailsTwoTone,
  Face as FaceIcon,
  InsightsOutlined,
  AlternateEmail as UserNameIcon,
} from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import { transformImage } from "../../lib/features";
import moment from "moment";

const Profile = ({ user }) => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        src={transformImage(user?.avatar?.url,200)}
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard  heading={"Bio"} text={user?.bio} Icon={<InsightsOutlined/>} />
      <ProfileCard
        heading={"Username"}
        text={user?.username}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text={user?.name} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment(user?.createdAt).fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    width={"100%"}
    alignItems={"center"}
    justifyContent={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack alignItems={"center"}
    justifyContent={"center"}>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;

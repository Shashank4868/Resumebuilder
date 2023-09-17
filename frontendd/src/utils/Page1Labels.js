import {
  FaGlobe,
  FaLinkedin,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdOutlineLocalPhone } from "react-icons/md";
import { ImTwitter } from "react-icons/im";

export const pageOneLabels = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    required: true,
    value: "",
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    required: true,
    value: "",
  },

  {
    label: "Email",
    name: "email",
    type: "email",
    required: true,
    value: "",
    icon: <MdEmail />,
  },

  {
    label: "Phone",
    name: "phone",
    type: "tel",
    required: true,
    value: "",
    icon: <MdOutlineLocalPhone />,
  },

  {
    label: "Your Website",
    name: "yourWebsite",
    type: "text",
    required: false,
    value: "",
    icon: <FaGlobe />,
  },
  {
    label: "GitHub",
    name: "github",
    type: "text",
    required: false,
    value: "",
    icon: <FaGithub />,
  },
  {
    label: "Linked In",
    name: "linkedin",
    type: "text",
    required: false,
    value: "",
    icon: <FaLinkedin />,
  },
  {
    label: "Twitter",
    name: "twitter",
    type: "text",
    required: false,
    value: "",
    icon: <ImTwitter />,
  },
  {
    label: "Facebook",
    name: "facebook",
    type: "text",
    required: false,
    value: "",
    icon: <FaFacebookF />,
  },
  {
    label: "Instagram",
    name: "instagram",
    type: "text",
    required: false,
    value: "",
    icon: <FaInstagram />,
  },
];

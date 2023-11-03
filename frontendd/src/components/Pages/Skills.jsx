import { Box, MenuItem, Typography } from "@mui/material";
import React from "react";

import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import { FormControl } from "@mui/base";
import Achievements from "./Achievements";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "C",
  "C++",
  "Python",
  "Java",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "Material UI",
  "Git",
  "GitHub",
  "Linux",
  "Windows",
  "MacOS",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe XD",
  "Figma",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Adobe Lightroom",
  "Adobe Audition",
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft PowerPoint",
  "Microsoft Outlook",
  "Microsoft Teams",
  "Google Drive",
  "Google Docs",
  "Google Sheets",
  "Google Slides",
  "Google Meet",
  "Google Forms",
  "Google Chrome",
  "Google Search",
  "Google Maps",
  "Google Translate",
  "Google Photos",
  "Google Keep",
  "Google Calendar",
  "Google Earth",
  "Google News",
  "Google Books",
  "Google Scholar",
  "Google Finance",
  "Google Trends",
  "Google AdSense",
  "Google AdWords",
  "Google AdMob",
  "Google Analytics",
  "Google Search Console",
  "Google My Business",
  "Google Ad Manager",
  "Google Tag Manager",
  "Google Firebase",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Skills = (props) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <React.Fragment>
      <Typography
        variant="h5"
        fontWeight={"bold"}
        fontFamily={"monospace"}
        sx={{ mb: 3 }}
        margin={4}
      >
        Technical Skills
      </Typography>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          className="w-full text-blue-950"
          value={personName}
          // value="Skills"
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <hr className="mt-8 mb-2 bg-black h-0.5" />
      <Achievements setPage={props.setPage} />
    </React.Fragment>
  );
};

export default Skills;

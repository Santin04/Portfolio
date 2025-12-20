import {
    SiAmazonaws,
    SiDocker,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiTypescript,
    SiXcode
} from "react-icons/si";

export type SkillLevel = "" | "Iniciante" | "Intermediário" | "Intermediário/Avançado" | "Avançado" | "Especialista";

export interface Skill {
    name: string;
    icon: any;
    level: SkillLevel;
}

export const skills: Skill[] = [
    { name: "Python", icon: SiPython, level: "Intermediário" },
    { name: "HTML & CSS", icon: SiHtml5, level: "Avançado" },
    { name: "JavaScript", icon: SiJavascript, level: "Avançado" },
    { name: "Node.js", icon: SiNodedotjs, level: "Avançado" },
    { name: "TypeScript", icon: SiTypescript, level: "Intermediário/Avançado" },
    { name: "React", icon: SiReact, level: "Avançado" },
    { name: "Next.js", icon: SiNextdotjs, level: "Intermediário/Avançado" },
    { name: "Nest.js", icon: SiNestjs, level: "Intermediário/Avançado" },
    { name: "Delphi", icon: SiXcode, level: "Intermediário" },
    { name: "Git & GitHub", icon: SiGithub, level: "Avançado" },
    { name: "SQL", icon: SiMysql, level: "Avançado" },
    { name: "PostgreSQL", icon: SiPostgresql, level: "Avançado" },
    { name: "MongoDB", icon: SiMongodb, level: "Intermediário" },
    { name: "Docker", icon: SiDocker, level: "Iniciante" },
    { name: "AWS", icon: SiAmazonaws, level: "Iniciante" },
];

export default { skills };

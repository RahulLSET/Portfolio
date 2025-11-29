import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3, FaServer, FaNodeJs, FaAws, FaGithub, FaDocker, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbApi, TbCloudComputing, TbBrandReactNative } from "react-icons/tb";
import { SiAuth0, SiSocketdotio, SiTypescript, SiRedux, SiExpress, SiMongodb, SiAwslambda, SiGooglegemini, SiApachekafka, SiRedis, SiNginx, SiGithubcopilot, SiInternetcomputer, SiMui, SiCanva } from "react-icons/si";
import { RiSecurePaymentLine, RiTailwindCssFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { BsDatabaseFillCheck, BsFillBucketFill, BsUbuntu } from "react-icons/bs";
import { MdOutlineLaptopMac, MdDesignServices } from "react-icons/md";
import { AiFillOpenAI, AiOutlineKubernetes } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa6";
import { GoVersions } from "react-icons/go";
import { FaBootstrap } from "react-icons/fa";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

const skillCard = [
  {
    title: "Frontend",
    icon: MdOutlineLaptopMac,
    skills: [
      { icon: FaReact, name: "React JS", hoverColor: "hover:text-black hover:bg-[#61DBFB]" },
      { icon: RiNextjsLine, name: "Next JS", hoverColor: "hover:bg-black" },
      { icon: SiTypescript, name: "Typescript", hoverColor: "hover:bg-[#3178C6]" },
      { icon: IoLogoJavascript, name: "Javascript", hoverColor: "hover:bg-amber-400" },
      { icon: FaHtml5, name: "HTML", hoverColor: "hover:bg-orange-500" },
      { icon: FaCss3, name: "CSS", hoverColor: "hover:bg-blue-600" },
      { icon: SiRedux, name: "Redux", hoverColor: "hover:bg-red-900" },
      { icon: IoMdSettings, name: "Context API", hoverColor: "hover:bg-[#F59F1D]" },
    ],
  },
  {
    title: "Design & Templates",
    icon: MdDesignServices,
    skills: [
      { icon: FaCss3, name: "CSS", hoverColor: "hover:bg-blue-600" },
      { icon: FaBootstrap, name: "Bootstrap", hoverColor: "hover:bg-purple-500" },
      { icon: RiTailwindCssFill, name: "Tailwind CSS", hoverColor: "hover:bg-[#3B82F6]" },
      { icon: SiMui, name: "Material UI", hoverColor: "hover:bg-[#1976d2]" },
      { icon: SiCanva, name: "Canva", hoverColor: "hover:bg-purple-600" },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    skills: [
      { icon: FaNodeJs, name: "Node JS", hoverColor: "hover:text-black hover:bg-green-500" },
      { icon: SiExpress, name: "Express JS", hoverColor: "hover:bg-[#7a868c]" },
      { icon: SiSocketdotio, name: "Web Sockets", hoverColor: "hover:text-black hover:bg-white" },
      { icon: RiSecurePaymentLine, name: "JWT", hoverColor: "hover:bg-gray-900" },
      { icon: SiAuth0, name: "Auth JS", hoverColor: "hover:bg-purple-600" },
      { icon: TbApi, name: "REST API", hoverColor: "hover:bg-yellow-900" },
    ],
  },
  {
    title: "Database",
    icon: BsDatabaseFillCheck,
    skills: [
      { icon: GrMysql, name: "MySQL", hoverColor: "hover:bg-blue-500" },
      { icon: BiLogoPostgresql, name: "PostgreSQL", hoverColor: "hover:bg-orange-800" },
      { icon: SiMongodb, name: "MongoDB", hoverColor: "hover:bg-green-500" },
    ],
  },
  {
    title: "Mobile Application",
    icon: HiMiniDevicePhoneMobile,
    skills: [
      { icon: TbBrandReactNative, name: "React Native", hoverColor: "hover:bg-blue-900" },
    ],
  },
  {
    title: "Cloud Computing",
    icon: TbCloudComputing,
    skills: [
      { icon: FaAws, name: "AWS EC2", hoverColor: "hover:bg-blue-950" },
      { icon: BsFillBucketFill, name: "AWS S3", hoverColor: "hover:bg-green-500" },
      { icon: SiAwslambda, name: "AWS Lambda", hoverColor: "hover:bg-orange-700" },
    ],
  },
  {
    title: "Generative Ai",
    icon: SiGooglegemini,
    skills: [
      { icon: AiFillOpenAI, name: "OpenAI", hoverColor: "hover:bg-black hover:text-amber-50" },
      { icon: FaGoogle, name: "Geimini", hoverColor: "hover:bg-[linear-gradient(to_left,_#4285F4_0%,_#34A853_33%,_#FBBC05_66%,_#EA4335_100%)]" },
      { icon: SiGithubcopilot, name: "Github Copilot", hoverColor: "hover:bg-black hover:text-amber-50" },
    ],
  },
  {
    title: "Version Controlling",
    icon: GoVersions,
    skills: [
      { icon: FaGithub, name: "Github", hoverColor: "hover:bg-black hover:text-amber-50" },
    ],
  },
  {
    title: "Micro Services",
    icon: GoVersions,
    skills: [
      { icon: SiApachekafka, name: "Kafka", hoverColor: "hover:bg-black hover:text-amber-50" },
      { icon: SiRedis, name: "Redis", hoverColor: "hover:bg-red-700" },
      { icon: SiNginx, name: "Nginx", hoverColor: "hover:bg-green-700" },
    ],
  },
  {
    title: "Containers & Orchestration",
    icon: GoVersions,
    skills: [
      { icon: FaDocker, name: "Docker", hoverColor: "hover:bg-[#0db7ed]" },
      { icon: AiOutlineKubernetes, name: "Kubernetes", hoverColor: "hover:bg-blue-800" },
    ],
  },
  {
    title: "Others",
    icon: SiInternetcomputer,
    skills: [
      { icon: FaJava, name: "Core Java", hoverColor: "hover:bg-orange-800" },
      { icon: BsUbuntu, name: "Ubuntu Linux", hoverColor: "hover:bg-orange-600" },
    ],
  },
];

export default skillCard;

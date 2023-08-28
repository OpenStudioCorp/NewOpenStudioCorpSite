import { type Developer, OPENSTUDIO_DEVELOPERS } from "./developer";

export type Project = {
	title: string,
	description?: string,
	icon?: string,
	link: string,
	contributors?: Developer[]
};

export const OPENSTUDIO_PROJECTS: Project[] = [
	{
		title: "OpenNoteBlockStudioVR",
        link: "https://github.com/OpenStudioCorp/OpenNoteBlockStudioVR",
        contributors: [
            OPENSTUDIO_DEVELOPERS['charlie-sans'],
            OPENSTUDIO_DEVELOPERS['Beatzoid'],
            OPENSTUDIO_DEVELOPERS['Syembol']
        ]
	},
    {
        title: "Open-NBS-VR-FILES",
        link: "https://github.com/OpenStudioCorp/Open-NBS-VR-FILES",
        contributors: [
            OPENSTUDIO_DEVELOPERS['charlie-sans']
        ]
    },
    {
        title: "OpenStudioCorp.github.io",
        link: "https://github.com/OpenStudioCorp/OpenStudioCorp.github.io",
        contributors: [
            OPENSTUDIO_DEVELOPERS['charlie-sans']
        ]
    },
    {
        title: "PythonicOS",
        link: "https://github.com/OpenStudioCorp/PythonicOS",
        description: "An OpenSource Display/desktop manager for linux",
        contributors: [
            OPENSTUDIO_DEVELOPERS['charlie-sans'],
            OPENSTUDIO_DEVELOPERS['h4rldev'],
            OPENSTUDIO_DEVELOPERS['ProSureString']
        ]
    },
    {
        title: "PythonicOS-dev",
        link: "https://github.com/OpenStudioCorp/PythonicOS-dev",
        contributors: [
            OPENSTUDIO_DEVELOPERS['charlie-sans'],
            OPENSTUDIO_DEVELOPERS['h4rldev']
        ]
    },
    {
        title: "Openstudio.github.io",
        link: "https://github.com/OpenStudioCorp/Openstudio.github.io",
        contributors: [
            OPENSTUDIO_DEVELOPERS['charlie-sans']
        ]
    },
    {
        title: "PythonicOS-Devv",
        link: "https://github.com/OpenStudioCorp/PythonicOS-Devv",
        contributors: [
            OPENSTUDIO_DEVELOPERS['charlie-sans'],
            OPENSTUDIO_DEVELOPERS['ProSureString']
        ]
    },
    {
        title: "Pyton",
        link: "https://github.com/OpenStudioCorp/Pyton",
        description: "The official Pyton Package manager",
        contributors: [
            OPENSTUDIO_DEVELOPERS['charlie-sans']
        ]
    },
    {
        title: "NewOpenStudioCorpSite",
        link: "https://github.com/OpenStudioCorp/NewOpenStudioCorpSite",
        contributors: [
            OPENSTUDIO_DEVELOPERS['Ex-ce-pt'],
            OPENSTUDIO_DEVELOPERS['charlie-sans'],
            OPENSTUDIO_DEVELOPERS['sourena-kazemi']
        ]
    },
    {
        title: "OpenStudioDevelopment",
        link: "https://github.com/OpenStudioCorp/OpenStudioDevelopment",
        contributors: [
            OPENSTUDIO_DEVELOPERS['charlie-sans']
        ]
    },
    {
        title: "OpenStudioLauncher",
        link: "https://github.com/OpenStudioCorp/OpenStudioLauncher",
        description: "A launcher for games/projects",
        contributors: [
            OPENSTUDIO_DEVELOPERS['charlie-sans']
        ]
    },
    {
        title: "OpenStudioIDE",
        link: "https://github.com/OpenStudioCorp/OpenStudioIDE",
        description: "A built in-house IDE for OpenStudio",
        contributors: [
            OPENSTUDIO_DEVELOPERS['charlie-sans']
        ]
    },
    {
        title: "Welcome-to-OpenStudio",
        link: "https://github.com/OpenStudioCorp/Welcome-to-OpenStudio",
        contributors: [
            OPENSTUDIO_DEVELOPERS['charlie-sans'],

        ]
    }
];

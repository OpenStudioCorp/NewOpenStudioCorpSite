type Project = {
	title: string;
	description: string;
	image: string;
	link: string;
};
const projects: Project[] = [
	{
		title: 'PythonicOS',
		description: 'PythonicOS is a Open Source Desktop/Display manager for linux',
		image: 'PythonicOS.png',
		link: 'https://github.com/OpenStudioCorp/PythonicOS'
	},
	{
		title: 'Pyton',
		description:
			'pyton is a simple package manager for PythonicOS to allow users to install add-ons easy',
		image: 'noteblock.png',
		link: 'https://github.com/OpenStudioCorp/Pyton'
	},
	{
		title: 'OpenStudioIDE',
		description:
			"OpenStudioIDE and the python variant is a Csharp/python ide built in house to accommodate features which aren't present in other IDES",
		image: 'noteblock.png',
		link: 'https://github.com/OpenStudioCorp/OpenStudioIDE'
	},
	{
		title: 'OpenStudioLauncher',
		description:
			'the official OpenStudioLauncher allows users to create and play there favroute OpenStudio software/games while also being able to manage there projects',
		image: 'noteblock.png',
		link: 'https://github.com/OpenStudioCorp/OpenStudioLauncher'
	},
	{
		title: 'OpenNoteBlockStudioVR',
		description:
			'OpenNoteBlockStudioVr is a vr DAW/music creation software where you create noteblock songs by grabbing and placing cute little blocks',
		image: 'noteblock.png',
		link: 'https://github.com/OpenStudioCorp/OpenNoteBlockStudioVR'
	}
];
export default projects;

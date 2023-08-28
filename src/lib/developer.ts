export type Developer = {
	name: string,
	profilePicture?: string,
	link: string
};

type DeveloperDictionary = {
	[K: string]: Developer
}

export const OPENSTUDIO_DEVELOPERS: DeveloperDictionary = {
	'charlie-sans': {
		name: "charlie-sans",
		profilePicture: undefined,
		link: "https://github.com/charlie-sans"
	},
	'Beatzoid': {
		name: "Beatzoid",
		profilePicture: undefined,
		link: "https://github.com/Beatzoid"
	},
	'Syembol': {
		name: "Syembol",
		profilePicture: undefined,
		link: "https://github.com/Syembol"
	},
	'h4rldev': {
		name: "h4rldev",
		profilePicture: undefined,
		link: "https://github.com/h4rldev"
	},
	'ProSureString': {
		name: "ProSureString",
		profilePicture: undefined,
		link: "https://github.com/ProSureString"
	},
	'Ex-ce-pt': {
		name: "Ex-ce-pt",
		profilePicture: undefined,
		link: "https://github.com/Ex-ce-pt"
	},
	'sourena-kazemi': {
		name: "sourena-kazemi",
		profilePicture: undefined,
		link: "https://github.com/sourena-kazemi"
	},
	'shabman': {
		name: "shabman",
		profilePicture: undefined,
		link: "https://github.com/shabman"
	}
};

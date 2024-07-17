let firstName: string = 'Max';
let age: Number = 21;
let isOwner: boolean = true;

let profile: undefined = undefined;
let city: null = null;
let dogName: any = true;

// object structure //
const userProfile: {
	firstName: string;
	age: number;
	isOwner: boolean;
} = {
	age: 25,
	firstName: 'Kir',
	isOwner: true,
};

// massive

const numbers: number[] = [1, 2, 3, 4, 5];

const numbers2: [number, number] = [1, 2];
const numbers3: [string, number] = ['Kir', 2];

// functions
function getAge(): number {
	return 21;
}
getAge();

const getAge2 = (name: string): number => 21;
// rest
function getFullName(firstName: string, ...names: string[]) {
	return firstName + '' + names.join('');
}
//classes

class Animal {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	getName() {
		return this.name;
	}
}

const CAT = new Animal('cat');

// interfaces

interface IProfile {
	name: string;
	age: number;
	isOwner: boolean;
}

interface IWork {
	place: string;
}

const profile2: IProfile = {} as IProfile;

//Types
type IProfile3 = {
	name: string;
	age: number;
	isOwner: boolean;
} & IWork3;

type IWork3 = {
	place: string;
};

const profile3: IProfile = {} as IProfile;

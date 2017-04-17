

export class Runner {
	public id: number;
	public lastname:string;
	public firstname:string;
	public age:number;
	public yearOfBirth: number;
	public racecount:number;
	public races_since:number;
	public km_sum:number;
	public km_sum_per_year:number;
	public label: string;

	public yearPerfs: Array<YearPerformance>;
	
}

export class YearPerformance {
	public year:number;
	public raceCount:number;
}
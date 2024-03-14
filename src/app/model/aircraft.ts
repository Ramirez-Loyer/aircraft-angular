export class Aircraft {
    id: number;
    msn: string;
    prog: string;
    design:boolean;
    development:boolean;


constructor (id: number, msn:string,  prog: string, design:boolean, development:boolean) {
    this.id = id;
    this.msn = msn;
    this.prog = prog;
    this.design = design;
    this.development= development;

}
};
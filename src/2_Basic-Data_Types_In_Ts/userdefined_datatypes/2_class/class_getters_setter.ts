class person{
    private _name:string="N/A"
    
    public get name() : string {
        return this._name;
    }
    
    public set name(v : string) {
        this._name =v
    }
    
}

let p1 = new person();
p1.name="nikhil"
p1.name
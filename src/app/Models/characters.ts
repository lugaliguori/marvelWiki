export class characters {

    public id: number;
    public name: string;
    public description: string;
    public thumbnail: string;
    public comicsQty: number;
    public seriesQty: number;


    constructor(obj? : any){
        this.id = obj && obj['id'] || null;
        this.name = obj && obj['name'] || null;
        this.description = obj && obj['description'] || null;
        this.thumbnail = `${obj['thumbnail']['path']}.${obj['thumbnail']['extension']}`;
        this.comicsQty = obj && obj['comics'] && obj['comics']['returned'];
        this.seriesQty = obj && obj['series'] && obj['series']['returned'];
    }
    

}
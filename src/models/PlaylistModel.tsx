export class PlaylistCategoryModel {
    public category_id :string = "";
    public userid :string = "";
    public title :string = "";
    public description :string = "";
    public status :string = "";
  }

export class PlaylistModel{
  public updated_at: Date=new Date();
  public user_id: number=0;
  public description: string="";
  public id: string="a02d33c3-e82e-4df7-be1f-c01a943ad55e";
  public title: string=""
  public status: string="";
}
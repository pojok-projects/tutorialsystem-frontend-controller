import { VideoModel } from "./VideoModel";
import { UserModel } from "./UserModel";


// or category 
export class PlaylistModel {
    category_id :string = "";
    userid :string = "e63d1115-8c27-4809-a01b-4cf511ede82c";
    title :string = "";
    description :string = "";
    status :string = "publik";
}

export class VideoUploadModel  {
    User :UserModel = new UserModel();
    Videos :VideoModel[] = new Array<VideoModel>();
    Playlist :PlaylistModel = new PlaylistModel();
    IsLoading :boolean = false;
    IsError :boolean = false;
    ErrorMessage :any;
}

export class CategoryModel {
    id :string = "";
    name :string = "";
    description :string = "";
  }
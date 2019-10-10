export class UserModel {
    user_id :string = "";
    name :string = "";
    email :string = "";
    first_name :string = "";
    last_name :string = "";
    birth_date :Date = new Date();
    gender :string = "";
    photo_profile :string = "";
    about :string = "";
    website_link :string = "";
    facebook_link :string = "";
    twitter_link :string = "";
    linkedin_link :string = "";
}

export class VideoModel{
    user_id :string = "";
    video_title :string = "";
    video_description :string = "";
    video_genre :string = "";
    category_id :string = "";
    privacy :string = "";
    file_name :string = "";
    duration :number = 0;
    file_path :string = "";
    size :number = 0;
    format :string = "";
    resolution :string = "";
}

// or category 
export class PlaylistModel {
    category_id :string = "";
    user_id :string = "";
    title :string = "";
    description :string = "";
   status :string = "";
}

export class VideoUploadModel  {
    User :UserModel = new UserModel();
    Videos :VideoModel[] = new Array<VideoModel>();
    Playlist :PlaylistModel = new PlaylistModel();
}

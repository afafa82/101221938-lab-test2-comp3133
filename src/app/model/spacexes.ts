export class Spacexes {
  id: string;
  mission_name: string;
  launch_year: string;
  details: string;
  mission_patch_small: string;
  site_name_long: string;

  constructor(
    id: string,
    mission_name: string,
    launch_year: string,
    details: string,
    mission_patch_small: string,
    site_name_long: string
  ) {
    this.id = id;
    this.mission_name = mission_name;
    this.launch_year = launch_year;
    this.details = details;
    this.mission_patch_small = mission_patch_small;
    this.site_name_long = site_name_long;
  }
}

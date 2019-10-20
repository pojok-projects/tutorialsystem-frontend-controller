export const PlayListController = () => {
  return fetch("https://api.tutorialinaja.tech/pm/v1/category")
  .then(res => res.json())
}

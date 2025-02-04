function cleanDate(date: string) {
  const halfSplit = date.split(",");
  const splitDate1 = date.split(" ");
  const splitDate2 = halfSplit[1].split(" ");

  const pushDate = [];

  pushDate.push(
    "du",
    splitDate1[0],
    splitDate1[2],
    splitDate1[1],
    splitDate1[3],
    "au",
    splitDate2[0],
    splitDate2[2],
    splitDate2[1],
    splitDate2[3],
  );

  for (let i = 0; i < pushDate.length; i++) {
    switch (pushDate[i]) {
      case "Mon":
        pushDate[i] = "lundi";
        break;
      case "Tue":
        pushDate[i] = "mardi";
        break;
      case "Wed":
        pushDate[i] = "mercredi";
        break;
      case "Thu":
        pushDate[i] = "jeudi";
        break;
      case "Fri":
        pushDate[i] = "vendredi";
        break;
      case "Sat":
        pushDate[i] = "samedi";
        break;
      case "Sun":
        pushDate[i] = "dimanche";
        break;

      case "Jan":
        pushDate[i] = "janvier";
        break;
      case "Feb":
        pushDate[i] = "février";
        break;
      case "Mar":
        pushDate[i] = "mars";
        break;
      case "Apr":
        pushDate[i] = "avril";
        break;
      case "May":
        pushDate[i] = "mai";
        break;
      case "Jun":
        pushDate[i] = "juin";
        break;
      case "Jul":
        pushDate[i] = "juillet";
        break;
      case "Aug":
        pushDate[i] = "août";
        break;
      case "Sep":
        pushDate[i] = "septembre";
        break;
      case "Oct":
        pushDate[i] = "octobre";
        break;
      case "Nov":
        pushDate[i] = "novembre";
        break;
      case "Dec":
        pushDate[i] = "décembre";
    }
  }
  return pushDate.join(" ");
}
export default cleanDate;

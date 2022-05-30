import { getDocumentTypeNodeName } from "parse5/lib/tree-adapters/default";
import { DateTime } from "../luxon";
class date{
    static dates (){
    const time = DateTime.now().toLocaleString({
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digmit',
    })

constgetdate = document.querySelector('.date');
   const getDate=  document.querySelector('.date');
      getDate.innerHTML = time;
    }
}
date.dates();
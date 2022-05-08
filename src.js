// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//select section with id="newsletters"

//loop data and for each
//  create a section with class newsletter__container
//  create a h1 with class newsletter__title
//  create a div with class newsLetters
//  (at this point we will have array of length 3 or 4 depend on the newsletters)
//    loop through the array and for each:
//      create div with class newsletter
//      create img with class newletter__cover
//      create div with class overlay
//      create 4 p with content "Editor", "Date", "Pages", "Issue"
//      organize all html tag into desired htmnl structure

//to finish these steps we need theses functions:
//createHtmlElement(tagTpe, content, classes, id)
//appendHtml(parent, child)




var data = {
  "2021_2022": [
    {
      "issueNumber": 1,
      "editor": "Clarissa Sherine Widjaja",
      "date": "11/18/2021",
      "pages": "20",
      "url": ""
    },
    {
      "issueNumber": 2,
      "editor": "Clarissa Sherine Widjaja",
      "date": "11/18/2021",
      "pages": "20",
      "url": ""
    },
    {
      "issueNumber": 3,
      "editor": "Clarissa Sherine Widjaja",
      "date": "12/30/2021",
      "pages": "24",
      "url": ""
    }
  ],
  "2020_2021": [
    {
      "issueNumber": 1,
      "editor": "Sooleen Kim",
      "date": "11/18/2020",
      "pages": "20",
      "url": ""
    },
    {
      "issueNumber": 2,
      "editor": "Kristivera Vidinati",
      "date": "03/15/2021",
      "pages": "9",
      "url": ""
    },
    {
      "issueNumber": 3,
      "editor": "Kristivera Divinati",
      "date": "04/07/2021",
      "pages": "12",
      "url": ""
    },
    {
      "issueNumber": 4,
      "editor": "Kristivera Divinati",
      "date": "07/01/2021",
      "pages": "34",
      "url": ""
    }
  ],
  "2019_2020": [
    {
      "issueNumber": 1,
      "editor": "Natasha Grace",
      "date": "10/17/2019",
      "pages": "12",
      "url": ""
    },
    {
      "issueNumber": 2,
      "editor": "Natasha Grace",
      "date": "11/14/2019",
      "pages": "12",
      "url": ""
    },
    {
      "issueNumber": 3,
      "editor": "Natasha Grace",
      "date": "12/5/2019",
      "pages": "12",
      "url": ""
    },
    {
      "issueNumber": 4,
      "editor": "Kim Hwang yeo",
      "date": "05/27/2020",
      "pages": "20",
      "url": ""
    }
  ],
  "2018_2019": [
    {
      "issueNumber": 1,
      "editor": "Ariana Kalantari",
      "date": "11/15/2018",
      "pages": "12",
      "url": ""
    },
    {
      "issueNumber": 2,
      "editor": "Ariana Kalantari",
      "date": "12/06/2019",
      "pages": "12",
      "url": ""
    },
    {
      "issueNumber": 3,
      "editor": "Ariana Kalantari",
      "date": "04/04/2019",
      "pages": "12",
      "url": ""
    },
    {
      "issueNumber": 4,
      "editor": "Ariana Kalantari",
      "date": "05/02/2019",
      "pages": "12",
      "url": ""
    }
  ],
  "2017_2018": [
    {
      "issueNumber": 1,
      "editor": "Thomas Hoversen",
      "date": "11/02/2017",
      "pages": "8",
      "url": ""
    },
    {
      "issueNumber": 2,
      "editor": "Thomas Hoversen",
      "date": "12/07/2017",
      "pages": "8",
      "url": ""
    },
    {
      "issueNumber": 3,
      "editor": "Thomas Hoversen",
      "date": "03/22/2017",
      "pages": "7",
      "url": ""
    },
    {
      "issueNumber": 4,
      "editor": "Thomas Hoversen",
      "date": "04/05/2018",
      "pages": "12",
      "url": ""
    }
  ],
  "2015_2016": [
    {
      "issueNumber": 1,
      "editor": "Elizabeth King",
      "date": "10/08/2015",
      "pages": "16",
      "url": ""
    },
    {
      "issueNumber": 2,
      "editor": "Elizabeth King",
      "date": "11/05/2015",
      "pages": "16",
      "url": ""
    },
    {
      "issueNumber": 3,
      "editor": "Elizabeth King",
      "date": "12/10/2015",
      "pages": "16",
      "url": ""
    },
    {
      "issueNumber": 4,
      "editor": "Elizabeth King",
      "date": "04/07/2016",
      "pages": "12",
      "url": ""
    },
    {
      "issueNumber": 5,
      "editor": "Elizabeth King",
      "date": "04/12/2016",
      "pages": "8",
      "url": ""
    },
    {
      "issueNumber": 6,
      "editor": "Elizabeth King",
      "date": "06/02/2016",
      "pages": "8",
      "url": ""
    }
  ],
  "2014_2015": [
    {
      "issueNumber": 1,
      "editor": "Evelyn Huynh",
      "date": "10/16/2014",
      "pages": "12",
      "url": ""
    },
    {
      "issueNumber": 2,
      "editor": "Evelyn Huynh",
      "date": "11/06/2014",
      "pages": "12",
      "url": ""
    },
    {
      "issueNumber": 3,
      "editor": "Evelyn Huynh",
      "date": "12/04/2014",
      "pages": "12",
      "url": ""
    },
    {
      "issueNumber": 4,
      "editor": "Alana Rivera",
      "date": "12/04/2014",
      "pages": "12",
      "url": "https://drive.google.com/file/d/135_FrQCjuWFg5qM-HN65_3dZr3z0-daP/view"
    }
  ],
  "2013_2014": [
    {
      "issueNumber": 1,
      "date": "10.17.2013",
      "pages": 7,
      "editor": "Jonathan Canahui",
      "url": "https://drive.google.com/file/d/1JqqC0bDOCJlkO1QA8GkRfwndhDXOFHTh/view"
    },
    {
      "issueNumber": 2,
      "date": "11.14.2013",
      "pages": 7,
      "editor": "Jonathan Canahui",
      "url": "https://drive.google.com/file/d/1JqqC0bDOCJlkO1QA8GkRfwndhDXOFHTh/view"
    },
    {
      "issueNumber": 3,
      "date": "12.05.2013",
      "pages": 7,
      "editor": "Jonathan Canahui",
      "url": "https://drive.google.com/file/d/1JqqC0bDOCJlkO1QA8GkRfwndhDXOFHTh/view"
    }
  ],
  "2012_2013": [
    {
      "issueNumber": 1,
      "date": "10.04.2012",
      "pages": 12,
      "editor": "Sierra Mcdonald",
      "url": "https://drive.google.com/file/d/1JqqC0bDOCJlkO1QA8GkRfwndhDXOFHTh/view"
    },
    {
      "issueNumber": 2,
      "date": "11.08.2012",
      "pages": 12,
      "editor": "Sierra Mcdonald",
      "url": "https://drive.google.com/file/d/1JqqC0bDOCJlkO1QA8GkRfwndhDXOFHTh/view"
    },
    {
      "issueNumber": 3,
      "date": "12.18.2012",
      "pages": 12,
      "editor": "Sierra Mcdonald",
      "url": "https://drive.google.com/file/d/1JqqC0bDOCJlkO1QA8GkRfwndhDXOFHTh/view"
    },
    {
      "issueNumber": 4,
      "date": "04.04.2013",
      "pages": 12,
      "editor": "Jonathan Canahui",
      "url": "https://drive.google.com/file/d/1JqqC0bDOCJlkO1QA8GkRfwndhDXOFHTh/view"
    }
  ]
};


// const news = document.getElementsByClassName('newsletters');

function appendHtml(parent, child)
{
  parent.appendChild(child);
}

function ceateHtmlElement(tagTpe, content, classes, id)
{
  var tag = document.createElement(tagTpe);
  tag.id = id;
  tag.class = classes;
  tag.innerHtml = content;
  return tag;
}


for(var i = 0; i < Object.keys(data).length; ++i)
{
  const section = document.createElement("section");
  section.class = "newsletter__container";

  const h1 = document.createElement("h1");
  h1.class = "newletter__title";
  appendHtml(section, h1);

  const div = document.createElement("div");
  div.class = "newsletters";
  appendHtml(section, div);



    // i still need to work on iterating through the
    // keys in the 2d array
  for (var j = 0; j < Object.keys(data)[i].length; j++) {
    const div1 = document.createElement("div");
    div.class = "newsletters";
    appendHtml(div, div1);

    const img = document.createElement("img");
    div.class = "newsletter__cover";
    div.src = data[i].url;
    appendHtml(div, img);

    const div2 = document.createElement("div");
    div.class = "overlay";
    appendHtml(div, div2);

    const p1 = document.createElement("p");
    p1.innerHtml = "Editor: " + data[i].editor;
    appendHtml(div, p1);

    const p2 = document.createElement("p");
    p2.innerHtml = "Data: " + data[i].date;
    appendHtml(div, p2);

    const p3 = document.createElement("p");
    p3.innerHtml = "Pages: " + data[i].pages;
    appendHtml(div, p3);


    const p4 = document.createElement("p");
    p4.innerHtml = "Issue Number: " + data[i].issueNumber;
    appendHtml(div, p4);
    }
}

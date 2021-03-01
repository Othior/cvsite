export { list_backend ,list_frontend, list_langageDb , list_reseaux, ElementImageContent  }

interface ElementImageContent {
    image: string,
    content: string
}

const url_image : string = "../../assets/";

const list_backend : Array<ElementImageContent> = [
    {
        image: url_image + "c.png",
        content: " C# ( ASP/NET) "
    },
    {
        image: url_image + "java.png",
        content: " Java (Spring boot) "
    },
    {
        image: url_image + "Node.js.png",
        content: " NodeJs "
    },
    {
        image: url_image + "python.png",
        content: " Python (Tkinter) "
    },
    {
        image: url_image + "PHP.png",
        content: " PHP (Symfony)"
    }
];

const list_frontend : Array<ElementImageContent> = [
    {
        image: url_image + "angular.png",
        content: " Angular "
    },
    {
        image: url_image + "React.png",
        content: " Reactjs "
    },
    {
        image: url_image + "vueJs.png",
        content: " Vuejs "
    },
    {
        image: url_image + "bootstrap.png",
        content: " Bootstrap 4 "
    },
    {
        image: url_image + "HTML5.png ",
        content: " HTML / CSS "
    }
];

const list_reseaux : Array<ElementImageContent> = [
    {
        image: url_image + "linkedin.png" ,
        content: "https://www.linkedin.com/in/marvyn-splingaire-675849191/"
    },
    {
        image: url_image + "github.png" ,
        content: "https://github.com/Othior"
    }
];

const list_langageDb: Array<ElementImageContent> = [
    {
        image: url_image + "MySQL.png" ,
        content: " MySQL "
    },
    {
        image: url_image + "tsql.png" ,
        content: " T-SQL "
    },
    {
        image: url_image + "NOSQL.png" ,
        content: " NOSQL "
    }
  ]



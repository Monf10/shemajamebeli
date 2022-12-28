
const momxareblebi = [
    {"id":7,
    "first_name":"Michael",
    "last_name":"Lawson",
    "avatar":"https://reqres.in/img/faces/7-image.jpg"
    },
    {"id":8,
    "first_name":"Lindsay",
    "last_name":"Ferguson",
    "avatar":"https://reqres.in/img/faces/8-image.jpg"
    },
    {"id":9,
    "first_name":"Tobias",
    "last_name":"Funke",
    "avatar":"https://reqres.in/img/faces/9-image.jpg"
    },
    {"id":10,
    "first_name":"Byron",
    "last_name":"Fields",
    "avatar":"https://reqres.in/img/faces/10-image.jpg"
    },
    {"id":11,
    "first_name":"George",
    "last_name":"Edwards",
    "avatar":"https://reqres.in/img/faces/11-image.jpg"
    },
    {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"}
]
export default function Users(){
 
    return(
        <div className="main-div">
            {
               momxareblebi.map(item => (
                <div className="user-div" key={item.id}>
                    {item.first_name + " " + item.last_name}
                    <img src={item.avatar}></img>
                    <button>Add Friend</button>
                </div>
               )) 
            }
        </div>
    )
}


async function fetchDataJson(){
    let response = await fetch('https://thronesapi.com/api/v2/Characters');
    let responseAsJson = await response.json();
    console.log(responseAsJson);
    renderData(responseAsJson);

}

function renderData(responseAsJson){
    let element = '';
    for (let i = 0; i < responseAsJson.length; i++){
        element = responseAsJson[i];
        document.getElementById("content").innerHTML += 
        `<div class="main"><div>
        <table>
            <tr>
                <td>
                    Family: ${element.family}</b>
                </td>
            </tr>
            <tr>
                <td>
                   First Name: <b>${element.firstName}</b>
                </td>
            </tr>
            <tr>
                <td>
                   Last Name: ${element.lastName}
                </td>
            </tr>
            <tr>
                <td>
                   Description: ${element.title}
                </td>
            </tr>
        </table>
    </div>
    <div class="imageSize">
        <img src="${element.imageUrl}" alt="image">
        </div></div>`;
    }
}































// async function fetchDataJsonBeans() {
//     try {
//         let response = await fetch('https://jellybellywikiapi.onrender.com/api/Beans');
//         let responseAsJson = await response.json();

//         let element = '';
//         for (let i = 0; i < responseAsJson.items.length; i++) {
//             element = responseAsJson.items[i];
//             // console.log(element);
//             document.getElementById('content').innerHTML +=   `<div>
//                                                                         <table>
//                                                                             <tr>
//                                                                                 <td>
//                                                                                     Nr ${element.beanId}: ${element.flavorName}
//                                                                                 </td>
//                                                                             </tr>
//                                                                         </table>
//                                                                     </div>`;
//         }
//     } catch (error) {
//         console.error("Fehler beim Abrufen der Daten:", error);
//         document.getElementById('content').innerHTML = `Fehler: ${error.message}`;
//     }
// }
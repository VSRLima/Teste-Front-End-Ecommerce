import Swal from "sweetalert2";

var indexedDB = window.indexedDB;

var btnAddQA = document.getElementById("btnAddQA");

(() => {
    var createdDB = indexedDB.open("DBTest", 1);

    createdDB.onupgradeneeded = () => {
        var db = createdDB.result;

        if(!db.objectStoreNames.contains("Q&A") && !db.objectStoreNames.contains("TalkToUs")) {
            db.createObjectStore("Q&A", {autoIncrement: true});

            addDefaultValues();
        }

        createdDB.onsuccess = () => {
            var db = createdDB.result;

            db.onversionchange = () => {
                db.close();
            }
        }

        createdDB.onerror = () => {
            console.error("Error to create a new indexedDB, try again")
        }
    }
})();

function addDefaultValues() {
    let db = indexedDB.open("DBTest");

    db.onsuccess = () => {
        var dbResult = db.result;

        var transaction = dbResult.transaction("Q&A", "readwrite");

        var storeSaved = transaction.objectStore("Q&A");

        var request = storeSaved.add("Essa mochila é resistente a rasgos?");
        storeSaved.add("A mochila é feita com um material resistente, porém há sempre que ter cuidado ao manuseala");
        storeSaved.add("Essa mochila é resistente a água?");
        storeSaved.add("A mochila é feita de material impermeável, logo sim!");
        
        request.onsuccess = () => {
            addElements();
        }

        request.onerror = () => {
            console.error("Error on adding new item at IndexedDB");
        };

        transaction.onerror = () => {
            console.log("Transaction incompleted on IndexedDB")
        }
    }

    db.onerror = () => {
        console.log("Error to open a speciefied IndexedDB")
    }
}

var sectionQA = document.getElementById('QAS');

if (sectionQA != null ) {
    addElements();
}

function addElements() {
    var p;
    var dbRequest = indexedDB.open("DBTest");

    dbRequest.onsuccess = function(event) {
        var db = dbRequest.result;
        var transaction = db.transaction("Q&A");
        var objectStore = transaction.objectStore("Q&A");
        var objectRequest = objectStore.getAll();

        objectRequest.onsuccess = function(event) {
            for (let index = 0; index < objectRequest.result.length; index++) {
                if (index % 2 == 0) {

                    p = document.createElement('p');
                    p.textContent = objectRequest.result[index];
                    p.style.fontFamily = 'sansation';
                    p.style.fontSize = 'larger';
                    p.style.fontWeight = 600;
                    p.style.marginBottom = 'revert';
                    
                    sectionQA.appendChild(p);
                } else {
                    p = document.createElement('p');
                    p.textContent = objectRequest.result[index];
                    p.style.fontFamily = 'sansation';
                    p.style.marginBottom = 'revert';
                    
                    sectionQA.appendChild(p);
                }
            }
        };
    };
}

var inputQA = document.getElementById("inputValue");

// if(inputQA == null) {
//     document.getElementById('btnAddQA').disabled = true;
// } else {
//     document.getElementById('btnAddQA').disabled = true;
// }
if(btnAddQA != null)
{   
    btnAddQA.onclick = () => {
        if (inputQA.value != "") {
            let db = indexedDB.open("DBTest");

            db.onsuccess = () => {
                var dbResult = db.result;

                var transaction = dbResult.transaction("Q&A", "readwrite");

                var storeSaved = transaction.objectStore("Q&A");

                var request;

                request = storeSaved.add(inputQA.value);
                storeSaved.add("Esperando resposta do vendendor!")

                request.onsuccess = () => {
                    Swal.fire({
                        title: "Sucesso!",
                        html: "A pergunta foi adicionada e está em periodo de processamento. Quando voltar ao site, pode ser que já possa ve-la!",
                        icon: "success",
                        showConfirmButton: true,
                        confirmButtonText: "OK"
                    });
                }
                request.onerror = () => {
                    console.error("Error on adding new item at IndexedDB");
                };

                transaction.onerror = () => {
                    console.log("Transaction incompleted on IndexedDB")
                }
            }

            db.onerror = () => {
                console.log("Error to open a speciefied IndexedDB")
            }
        } else {
            Swal.fire({
                title: "Erro!",
                html: "Nada foi digitado no campo de perguntas. Digite e tente novamente!",
                icon: "error",
                showConfirmButton: true,
                confirmButtonText: "OK"
            });
        }
    }
}




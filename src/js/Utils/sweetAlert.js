import Swal from "sweetalert2";

var btnAction = document.getElementById("btnAction");

if(btnAction != null)
{
    btnAction.onclick = () => {
        Swal.fire({
            title: "Sucesso!",
            html: "Produto adicionado ao carrinho!",
            icon: "success",
            showConfirmButton: true,
            confirmButtonText: "OK"
        });
        
        if(autoClose > 0) {
            setTimeout(e => {
                Swal.close();
            }, 2000)
        }    
    } 
}



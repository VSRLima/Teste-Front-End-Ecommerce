import Swal from "sweetalert2";

var btnAction = document.getElementById("btnAction");

var btnActionEmail = document.getElementById("btnActionEmail")

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

if(btnActionEmail != null)
{
    btnActionEmail.onclick = () => {
        Swal.fire({
            title: "Sucesso!",
            html: "Um Email foi enviado para voce!",
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

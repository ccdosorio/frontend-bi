import Swal from 'sweetalert2';

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'button h-button is-primary',
    cancelButton: 'button h-button',
    popup: 'container-class',
    title: 'title-sweet',
    icon: 'icon-dark',
    htmlContainer: 'title-sweet'
  },
  buttonsStyling: false
});

export function SweetDelete(title: string, text: string) {
  return swalWithBootstrapButtons.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si',
    cancelButtonText: 'Cancelar'
  });
}

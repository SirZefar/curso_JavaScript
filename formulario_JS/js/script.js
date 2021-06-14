document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    const btn = document.getElementById('add');
    let id = 1;

    function removeTOdo(id) {
        console.log(id);
        document.getElementById(id).remove();
    }

    function addTOdo() {
        if (title.value === '' || description === '') {
            alert.classList.remove('d-none');
            alert.innerHTML = 'Titulo y descripción son requeridos';
            return;
        } else {
            alert.classList.add('d-none');
            const row = table.insertRow();
            row.setAttribute('id', id++);
            row.innerHTML = `
                <td>${title.value}</td>
                <td>${description.value}</td>
                <td class="text-center">
                    <input type="checkbox">
                </td>
                <td class="text-right">
                    <button class="btn btn-primary mb-1">
                        <i class="fa fa-pencil"></i>
                    </button>
                </td>
            `;

            const removeBtn = document.createElement('button');
            removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
            removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
            removeBtn.onclick = function(borrar) {
                removeTOdo(row.getAttribute('id'));
                console.log(borrar.target);
            }
            row.children[3].appendChild(removeBtn);

        }
    }

    btn.onclick = addTOdo;


});
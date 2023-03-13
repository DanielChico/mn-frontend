<script>
    let func = ""
    let a = 0
    let b = 0
    let error = 0
    const API_URL = "http://0.0.0.0:8000/api/v1/algorithms/"
    let data = []
    let show = false
    let algorithm = 0

    async function getResponse() {
        console.log(`function: ${func}, a: ${a}, b: ${b}, error: ${error}`)
        let encodeFunc = encodeURIComponent(func)
        const for_bisection = API_URL + `bisection?algorithm=${algorithm}&func=${encodeFunc}&a=${a}&b=${b}&error=${error}`
        console.log(for_bisection)
        const res = await fetch(for_bisection)
        const result = await res.json()
        if (res.ok) {
            return result
        }
    }

    async function handleButton() {
        data = await getResponse()
        console.log(data)
        show = true
    }
</script>
<div class="title">
    <h1>Algoritmos de Matemática Numérica</h1>
</div>
<div class="forForm">
    <form on:submit={handleButton}>
        <label>Seleccione el algoritmo</label>
        <select bind:value={algorithm} name="algorithm">
            <option value="0">Bisección</option>
            <option value="1">Regula Falsi</option>
            <option value="2">Newton</option>
            <option value="3">Secante</option>
        </select>
        <label>Función: </label>
        <input bind:value={func} placeholder="Escriba la función" type="text">
        <label>A: </label>
        <input bind:value={a} step="any" type="number">
        <label>B: </label>
        <input bind:value={b} step="any" type="number">
        <label>Error: </label>
        <input bind:value={error} step="any" type="number">
        <button>Enviar</button>
    </form>
</div>
{#if show}
    <div class="forTable">
        <table>
            <tr>
                <th>Iter</th>
                {#each data.headers as header}
                    <th>{header}</th>
                {/each}
            </tr>
            {#each data.content as row, i}
                <tr>
                    <td>{i}</td>
                    {#each row as value}
                        <td>{value}</td>
                    {/each}
                </tr>
            {/each}
        </table>
    </div>
{/if}
<style>
    .forTable {
        margin-top: 30px;
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    table {
        font-size: 20px;
        border: 1px solid;
        border-collapse: collapse;
        width: 50%;
    }

    th, td {
        padding: 10px;
        min-width: 30px;
        text-align: center;
        border: 1px solid;
    }

    th {
        background-color: #D6A033;
    }

    .forForm {
        display: flex;
        justify-content: center;
    }

    form {
        background-color: #D6A033;
        border-radius: 20px;
        max-width: 500px;
        width: 80%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    input {
        background-color: white;
        font-size: 16px;
        border-radius: 5px;
        margin: 3px;
        width: 50%;
        min-height: 25px;
        border: 1px solid
    }

    select {
        background-color: white;
        font-size: 16px;
        text-align: center;
        width: 50%;
        min-height: 25px;
    }

    button {
        min-height: 35px;
        margin: 5px;
        width: 20%;
        border-radius: 10px;
        background-color: #FFAC63;
        border: 1px solid;
    }

    button:hover {
        background-color: #FFCB70;
    }

    label {
        font-size: 18px;
        margin-top: 8px;
        margin-bottom: 3px;
    }

    .title {
        display: flex;
        justify-content: center;
    }

    .title h1 {
        color: #D6A033;
        text-shadow: 2px 2px 5px
    }
</style>


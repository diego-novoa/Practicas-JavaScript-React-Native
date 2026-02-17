const exercises = [
    {
        file: "01-variables.ts",
        title: "Variables y Tipos",
        summary: "Practica tipos primitivos, enums y tipado explicito en objetos.",
        topics: ["string", "number", "enum"],
        starterCode: `type UserRole = "admin" | "editor" | "viewer";

const usuario: { nombre: string; edad: number; rol: UserRole } = {
  nombre: "Ana",
  edad: 25,
  rol: "editor",
};

console.log("Usuario:", usuario.nombre, "- Rol:", usuario.rol);`,
    },
    {
        file: "02-funciones.ts",
        title: "Funciones Tipadas",
        summary: "Repasa parametros opcionales, retorno tipado y callbacks.",
        topics: ["funciones", "callbacks", "retorno"],
        starterCode: `function saludar(nombre: string, edad?: number): string {
  return edad ? \`Hola \${nombre}, tienes \${edad} anios\` : \`Hola \${nombre}\`;
}

const resultado = saludar("Carlos", 31);
console.log(resultado);`,
    },
    {
        file: "03-poo.ts",
        title: "POO con TypeScript",
        summary: "Clases, herencia, modificadores de acceso y metodos estaticos.",
        topics: ["class", "extends", "private"],
        starterCode: `class Persona {
  constructor(public nombre: string, protected edad: number) {}
  presentar(): string {
    return \`\${this.nombre} tiene \${this.edad} anios\`;
  }
}

class Mentor extends Persona {
  constructor(nombre: string, edad: number, private stack: string) {
    super(nombre, edad);
  }
  resumen(): string {
    return \`\${this.presentar()} y enseña \${this.stack}\`;
  }
}

console.log(new Mentor("Luis", 34, "TypeScript").resumen());`,
    },
    {
        file: "04-arreglos.ts",
        title: "Arreglos y Metodos",
        summary: "Map, filter y reduce para transformar y resumir datos.",
        topics: ["map", "filter", "reduce"],
        starterCode: `const notas: number[] = [80, 95, 72, 88, 100];
const aprobadas = notas.filter((nota) => nota >= 80);
const curva = aprobadas.map((nota) => Math.min(nota + 2, 100));
const promedio =
  curva.reduce((acum, actual) => acum + actual, 0) / curva.length;

console.log("Notas ajustadas:", curva);
console.log("Promedio:", promedio.toFixed(2));`,
    },
    {
        file: "05-arreglos-objetos.ts",
        title: "Objetos en Arreglos",
        summary: "Consultas frecuentes con arreglos de objetos y tipado fuerte.",
        topics: ["objetos", "find", "sort"],
        starterCode: `interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

const productos: Producto[] = [
  { id: 1, nombre: "Teclado", precio: 50 },
  { id: 2, nombre: "Mouse", precio: 25 },
  { id: 3, nombre: "Monitor", precio: 210 },
];

const caros = productos.filter((p) => p.precio >= 50);
console.log("Productos destacados:", caros.map((p) => p.nombre));`,
    },
    {
        file: "06-integracion-api.ts",
        title: "Integracion API",
        summary: "Fetch a API REST y procesamiento de resultados en consola.",
        topics: ["fetch", "async/await", "api"],
        starterCode: `interface Post {
  id: number;
  title: string;
}

async function traerPosts(): Promise<void> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = (await response.json()) as Post[];
  console.log("Primeros 3 titulos:");
  posts.slice(0, 3).forEach((post, index) => {
    console.log(index + 1, "-", post.title);
  });
}

void traerPosts();`,
    },
    {
        file: "src/app.ts",
        title: "Practica Web",
        summary: "Render de UI en HTML con TypeScript usando datos de API.",
        topics: ["dom", "render", "eventos"],
        starterCode: `const usuarios = ["Ana", "Luis", "Marta"];
const listado = usuarios.map((nombre, index) => \`\${index + 1}. \${nombre}\`);
console.log("Lista renderizable:");
console.log(listado.join("\\n"));`,
    },
];
function query(selector) {
    return document.querySelector(selector);
}
function isValidSnippetIndex(index) {
    return Number.isInteger(index) && index >= 0 && index < exercises.length;
}
function initNavigation() {
    const links = document.querySelectorAll(".site-nav a[data-page]");
    if (!links.length) {
        return;
    }
    const currentFile = window.location.pathname.split("/").pop() || "index.html";
    links.forEach((link) => {
        link.classList.toggle("active", link.dataset.page === currentFile);
    });
}
function initUsersSection() {
    const statusElement = query("#status");
    const usersContainer = query("#usersContainer");
    const reloadButton = query("#reloadButton");
    if (!statusElement || !usersContainer || !reloadButton) {
        return;
    }
    const status = statusElement;
    const usersRoot = usersContainer;
    const reload = reloadButton;
    function renderStatus(message, isError = false) {
        status.textContent = message;
        status.classList.toggle("error", isError);
    }
    function renderUsers(users) {
        const cardsHTML = users
            .map((user) => {
            return `
          <article class="card">
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Telefono:</strong> ${user.phone}</p>
            <a href="https://${user.website}" target="_blank" rel="noreferrer">
              Visitar sitio
            </a>
          </article>
        `;
        })
            .join("");
        usersRoot.innerHTML = cardsHTML;
    }
    async function loadUsers() {
        try {
            renderStatus("Cargando usuarios...");
            usersRoot.innerHTML = "";
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error(`Error HTTP ${response.status}`);
            }
            const apiUsers = (await response.json());
            renderUsers(apiUsers);
            renderStatus(`Se cargaron ${apiUsers.length} usuarios correctamente.`);
        }
        catch (error) {
            renderStatus("No fue posible cargar los usuarios.", true);
            usersRoot.innerHTML = "";
            console.error("Detalle del error:", error);
        }
    }
    reload.addEventListener("click", () => {
        void loadUsers();
    });
    void loadUsers();
}
function initStudioSection() {
    const exercisesContainer = query("#exercisesContainer");
    if (!exercisesContainer) {
        return;
    }
    const cardsHTML = exercises
        .map((exercise, index) => {
        const chipsHTML = exercise.topics
            .map((topic) => `<span class="chip">${topic}</span>`)
            .join("");
        return `
        <article class="studio-card" style="animation-delay: ${index * 70}ms;">
          <h3>${exercise.title}</h3>
          <p class="studio-file">${exercise.file}</p>
          <p>${exercise.summary}</p>
          <div class="chip-list">${chipsHTML}</div>
          <button
            type="button"
            class="open-terminal-btn"
            data-snippet-index="${index}"
          >
            Abrir en terminal
          </button>
        </article>
      `;
    })
        .join("");
    exercisesContainer.innerHTML = cardsHTML;
    exercisesContainer.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
            return;
        }
        const openButton = target.closest(".open-terminal-btn");
        if (!openButton) {
            return;
        }
        const rawIndex = openButton.dataset.snippetIndex;
        const index = Number(rawIndex);
        if (!rawIndex || Number.isNaN(index)) {
            return;
        }
        const url = new URL("./terminal.html", window.location.href);
        url.searchParams.set("snippet", String(index));
        window.location.href = url.toString();
    });
}
function initTerminalSection() {
    const tsEditor = query("#tsEditor");
    const lineNumbers = query("#lineNumbers");
    const runCodeButton = query("#runCodeButton");
    const clearConsoleButton = query("#clearConsoleButton");
    const terminalOutput = query("#terminalOutput");
    if (!tsEditor ||
        !lineNumbers ||
        !runCodeButton ||
        !clearConsoleButton ||
        !terminalOutput) {
        return;
    }
    const editor = tsEditor;
    const gutter = lineNumbers;
    const runButton = runCodeButton;
    const clearButton = clearConsoleButton;
    const output = terminalOutput;
    const TAB_SPACES = "  ";
    let compilerLoadAttempt = null;
    function escapeHTML(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }
    function stringifyValue(value) {
        if (typeof value === "string") {
            return value;
        }
        try {
            return JSON.stringify(value, null, 2);
        }
        catch (_error) {
            return String(value);
        }
    }
    function appendTerminalLine(message, kind = "log") {
        const className = kind === "error"
            ? "line-error"
            : kind === "warn"
                ? "line-warn"
                : kind === "info"
                    ? "line-info"
                    : "";
        const lineHTML = className
            ? `<div class="${className}">${escapeHTML(message)}</div>`
            : `<div>${escapeHTML(message)}</div>`;
        output.innerHTML += lineHTML;
        output.scrollTop = output.scrollHeight;
    }
    function clearTerminal() {
        output.innerHTML = "";
    }
    function syncLineNumbersScroll() {
        gutter.scrollTop = editor.scrollTop;
    }
    function updateLineNumbers() {
        const lineCount = editor.value.split("\n").length;
        gutter.textContent = Array.from({ length: lineCount }, (_, index) => `${index + 1}`).join("\n");
        syncLineNumbersScroll();
    }
    function insertTabAtCursor() {
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const currentValue = editor.value;
        if (start !== end && currentValue.slice(start, end).includes("\n")) {
            const blockStart = currentValue.lastIndexOf("\n", start - 1) + 1;
            const block = currentValue.slice(blockStart, end);
            const lines = block.split("\n");
            const indentedBlock = lines
                .map((line) => `${TAB_SPACES}${line}`)
                .join("\n");
            editor.value = `${currentValue.slice(0, blockStart)}${indentedBlock}${currentValue.slice(end)}`;
            editor.selectionStart = start + TAB_SPACES.length;
            editor.selectionEnd = end + TAB_SPACES.length * lines.length;
        }
        else {
            editor.value = `${currentValue.slice(0, start)}${TAB_SPACES}${currentValue.slice(end)}`;
            const caret = start + TAB_SPACES.length;
            editor.selectionStart = caret;
            editor.selectionEnd = caret;
        }
        updateLineNumbers();
    }
    function handleEditorKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            insertTabAtCursor();
            return;
        }
        if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
            event.preventDefault();
            void executeTypeScript();
        }
    }
    function loadSnippet(index) {
        if (!isValidSnippetIndex(index)) {
            return;
        }
        editor.value = exercises[index].starterCode;
        updateLineNumbers();
        editor.focus();
        appendTerminalLine(`Snippet cargado: ${exercises[index].file}`, "info");
    }
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`No se pudo cargar: ${src}`));
            document.head.append(script);
        });
    }
    async function ensureTypeScriptCompiler() {
        if (window.ts) {
            return window.ts;
        }
        if (!compilerLoadAttempt) {
            compilerLoadAttempt = (async () => {
                const candidates = [
                    "../node_modules/typescript/lib/typescript.js",
                    "/node_modules/typescript/lib/typescript.js",
                    "https://unpkg.com/typescript@5.9.3/lib/typescript.js",
                ];
                for (const src of candidates) {
                    try {
                        await loadScript(src);
                        if (window.ts) {
                            appendTerminalLine(`Compilador TS cargado desde: ${src}`, "info");
                            return window.ts;
                        }
                    }
                    catch (_error) {
                        // Intentamos el siguiente origen.
                    }
                }
                return null;
            })();
        }
        return compilerLoadAttempt;
    }
    async function runJavaScript(jsCode) {
        const consoleCapture = {
            log: (...args) => {
                appendTerminalLine(args.map((arg) => stringifyValue(arg)).join(" "));
            },
            warn: (...args) => {
                appendTerminalLine(args.map((arg) => stringifyValue(arg)).join(" "), "warn");
            },
            error: (...args) => {
                appendTerminalLine(args.map((arg) => stringifyValue(arg)).join(" "), "error");
            },
        };
        try {
            const execute = new Function("console", "fetch", `"use strict"; return (async () => { ${jsCode} })();`);
            const result = await execute(consoleCapture, fetch.bind(window));
            if (result !== undefined) {
                appendTerminalLine(`=> ${stringifyValue(result)}`, "info");
            }
        }
        catch (error) {
            const detail = error instanceof Error
                ? `${error.name}: ${error.message}`
                : String(error);
            appendTerminalLine(detail, "error");
        }
    }
    async function executeTypeScript() {
        if (!editor.value.trim()) {
            appendTerminalLine("No hay codigo para ejecutar.", "warn");
            return;
        }
        const compiler = await ensureTypeScriptCompiler();
        if (!compiler) {
            appendTerminalLine("No se pudo cargar TypeScript. Ejecuta desde la raiz del proyecto con: npm run serve:web", "error");
            return;
        }
        appendTerminalLine("$ Transpilando TypeScript...", "info");
        try {
            const transpiled = compiler.transpileModule(editor.value, {
                compilerOptions: {
                    target: compiler.ScriptTarget.ES2020,
                    module: compiler.ModuleKind.None,
                    strict: true,
                },
            });
            await runJavaScript(transpiled.outputText);
        }
        catch (error) {
            const detail = error instanceof Error
                ? `${error.name}: ${error.message}`
                : String(error);
            appendTerminalLine(detail, "error");
        }
    }
    runButton.addEventListener("click", () => {
        void executeTypeScript();
    });
    clearButton.addEventListener("click", clearTerminal);
    editor.addEventListener("keydown", handleEditorKeyDown);
    editor.addEventListener("input", updateLineNumbers);
    editor.addEventListener("scroll", syncLineNumbersScroll);
    const snippetParam = Number(new URLSearchParams(window.location.search).get("snippet"));
    loadSnippet(isValidSnippetIndex(snippetParam) ? snippetParam : 0);
    appendTerminalLine("Terminal lista. Edita el snippet y pulsa 'Ejecutar codigo'.", "info");
    void ensureTypeScriptCompiler();
}
initNavigation();
initUsersSection();
initStudioSection();
initTerminalSection();
export {};
//# sourceMappingURL=app.js.map
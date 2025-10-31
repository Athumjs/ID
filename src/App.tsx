import { useEffect, useRef, useState, type FormEvent } from "react";
import "./App.css";

interface fichasI {
  name: string;
  classe: string;
  vig: number;
  ast: number;
  arc: number;
  fer: number;
  soc: number;
  p1: string;
  p2: string;
  p3: string;
  vit: number;
  ene: number;
  tor: string;
  arma: string;
  armadura: string;
  escudo: string;
}

function App() {
  const [fichas, setFichas] = useState<fichasI[]>(
    JSON.parse(localStorage.getItem("fichas")!) || []
  );

  const nameRef = useRef<HTMLInputElement>(null);
  const classeRef = useRef<HTMLInputElement>(null);
  const vigRef = useRef<HTMLInputElement>(null);
  const astRef = useRef<HTMLInputElement>(null);
  const arcRef = useRef<HTMLInputElement>(null);
  const ferRef = useRef<HTMLInputElement>(null);
  const socRef = useRef<HTMLInputElement>(null);
  const p1Ref = useRef<HTMLSelectElement>(null);
  const p2Ref = useRef<HTMLSelectElement>(null);
  const p3Ref = useRef<HTMLSelectElement>(null);
  const torRef = useRef<HTMLInputElement>(null);
  const armaRef = useRef<HTMLInputElement>(null);
  const armaduraRef = useRef<HTMLInputElement>(null);
  const escudoRef = useRef<HTMLInputElement>(null);

  const [selectedFicha, setSelectedFicha] = useState<fichasI | null>(null);

  useEffect(() => {
    localStorage.setItem("fichas", JSON.stringify(fichas));
  }, [fichas]);

  const clearInputs = () => {
    [
      nameRef,
      classeRef,
      vigRef,
      astRef,
      arcRef,
      ferRef,
      socRef,
      p1Ref,
      p2Ref,
      p3Ref,
      torRef,
      armaRef,
      armaduraRef,
      escudoRef,
    ].forEach((ref) => {
      if (ref.current) ref.current.value = "";
    });
  };

  const createFicha = async (e: FormEvent) => {
    e.preventDefault();
    if (
      nameRef.current!.value === "" ||
      classeRef.current!.value === "" ||
      vigRef.current!.value === "" ||
      astRef.current!.value === "" ||
      arcRef.current!.value === "" ||
      ferRef.current!.value === "" ||
      socRef.current!.value === "" ||
      p1Ref.current!.value === "" ||
      p2Ref.current!.value === "" ||
      p3Ref.current!.value === "" ||
      vigRef!.current!.value === "" ||
      ferRef!.current!.value === "" ||
      torRef.current!.value === "" ||
      armaRef.current!.value === "" ||
      armaduraRef.current!.value === "" ||
      escudoRef.current!.value === ""
    )
      return;
    const wait = async () => {
      setFichas((prevState) => [
        ...prevState,
        {
          name: nameRef.current!.value,
          classe: classeRef.current!.value,
          vig: parseInt(vigRef.current!.value),
          ast: parseInt(astRef.current!.value),
          arc: parseInt(arcRef.current!.value),
          fer: parseInt(ferRef.current!.value),
          soc: parseInt(socRef.current!.value),
          p1: p1Ref.current!.value,
          p2: p2Ref.current!.value,
          p3: p3Ref.current!.value,
          vit: parseInt(vigRef!.current!.value) + 10,
          ene: parseInt(ferRef!.current!.value) + 10,
          tor: torRef.current!.value,
          arma: armaRef.current!.value,
          armadura: armaduraRef.current!.value,
          escudo: escudoRef.current!.value,
        },
      ]);
    };
    await wait();
    clearInputs();
  };

  return (
    <main>
      <form onSubmit={createFicha}>
        <h1>Idiotas numa Dungeon</h1>
        <section>
          <input type="text" id="nome" placeholder=" " ref={nameRef} />
          <label htmlFor="nome">Nome</label>
        </section>
        <section>
          <input type="text" id="classe" placeholder=" " ref={classeRef} />
          <label htmlFor="classe">Classe</label>
        </section>
        <section className="destaque" id="virtudes">
          <p>Virtudes</p>
          <section>
            <section>
              <label htmlFor="vig">Vigor:</label>
              <input
                type="number"
                min="0"
                max="5"
                placeholder="0"
                id="vig"
                ref={vigRef}
              />
            </section>
            <section>
              <label htmlFor="ast">Astúcia:</label>
              <input
                type="number"
                min="0"
                max="5"
                placeholder="0"
                id="ast"
                ref={astRef}
              />
            </section>
            <section>
              <label htmlFor="arc">Arcano:</label>
              <input
                type="number"
                min="0"
                max="5"
                placeholder="0"
                id="arc"
                ref={arcRef}
              />
            </section>
            <section>
              <label htmlFor="fer">Ferro:</label>
              <input
                type="number"
                min="0"
                max="5"
                placeholder="0"
                id="fer"
                ref={ferRef}
              />
            </section>
            <section>
              <label htmlFor="soc">Social:</label>
              <input
                type="number"
                min="0"
                max="5"
                placeholder="0"
                id="soc"
                ref={socRef}
              />
            </section>
          </section>
        </section>
        <section className="destaque" id="pericias">
          <p>Perícias</p>
          <section>
            <select ref={p1Ref} defaultValue="">
              <option value="" disabled>
                1
              </option>
              <option>Acrobacia</option>
              <option>Atletismo</option>
              <option>Furtividade</option>
              <option>Crime</option>
              <option>Mira</option>
              <option>Intuição</option>
              <option>Percepção</option>
              <option>Adestrar Animais</option>
              <option>Medicina</option>
              <option>Sobrevivência</option>
              <option>História</option>
              <option>Investigação</option>
              <option>Natureza</option>
              <option>Religião</option>
              <option>Intimidação</option>
              <option>Diplomacia</option>
              <option>Blefe</option>
              <option>Exploração</option>
              <option>Atuação</option>
            </select>
            <select ref={p2Ref} defaultValue="">
              <option value="" disabled>
                2
              </option>
              <option>Acrobacia</option>
              <option>Atletismo</option>
              <option>Furtividade</option>
              <option>Crime</option>
              <option>Mira</option>
              <option>Intuição</option>
              <option>Percepção</option>
              <option>Adestrar Animais</option>
              <option>Medicina</option>
              <option>Sobrevivência</option>
              <option>História</option>
              <option>Investigação</option>
              <option>Natureza</option>
              <option>Religião</option>
              <option>Intimidação</option>
              <option>Diplomacia</option>
              <option>Blefe</option>
              <option>Exploração</option>
              <option>Atuação</option>
            </select>
            <select ref={p3Ref} defaultValue="">
              <option value="" disabled>
                3
              </option>
              <option>Acrobacia</option>
              <option>Atletismo</option>
              <option>Furtividade</option>
              <option>Crime</option>
              <option>Mira</option>
              <option>Intuição</option>
              <option>Percepção</option>
              <option>Adestrar Animais</option>
              <option>Medicina</option>
              <option>Sobrevivência</option>
              <option>História</option>
              <option>Investigação</option>
              <option>Natureza</option>
              <option>Religião</option>
              <option>Intimidação</option>
              <option>Diplomacia</option>
              <option>Blefe</option>
              <option>Exploração</option>
              <option>Atuação</option>
            </select>
          </section>
        </section>
        <section>
          <input type="text" id="tormenta" placeholder=" " ref={torRef} />
          <label htmlFor="tormenta">Tormenta</label>
        </section>
        <section>
          <input type="text" id="arma" placeholder=" " ref={armaRef} />
          <label htmlFor="arma">Arma</label>
        </section>
        <section>
          <input type="text" id="armadura" placeholder=" " ref={armaduraRef} />
          <label htmlFor="armadura">Armadura</label>
        </section>
        <section>
          <input type="text" id="escudo" placeholder=" " ref={escudoRef} />
          <label htmlFor="escudo">Escudo</label>
        </section>
        <section>
          <button type="submit">Criar Ficha</button>
        </section>
      </form>
      <section id="ficha">
        <h1>Ficha de personagem</h1>
        {!selectedFicha ? (
          <p>Selecione uma Ficha.</p>
        ) : (
          <>
            <section>
              <h2>Informações</h2>
              <p>
                <strong>Nome:</strong> {selectedFicha.name}
              </p>
              <p>
                <strong>Classe:</strong> {selectedFicha.classe}
              </p>
            </section>
            <section>
              <h2>Virtudes</h2>
              <p>
                <strong>Vigor:</strong> {selectedFicha.vig}
              </p>
              <p>
                <strong>Astúcia:</strong> {selectedFicha.ast}
              </p>
              <p>
                <strong>Arcano:</strong> {selectedFicha.arc}
              </p>
              <p>
                <strong>Ferro:</strong> {selectedFicha.fer}
              </p>
              <p>
                <strong>Social:</strong> {selectedFicha.soc}
              </p>
            </section>
            <section>
              <h2>Perícias</h2>
              <p>
                <strong>1:</strong> {selectedFicha.p1}
              </p>
              <p>
                <strong>2:</strong> {selectedFicha.p2}
              </p>
              <p>
                <strong>3:</strong> {selectedFicha.p3}
              </p>
            </section>
            <section>
              <h2>Medidores</h2>
              <p>
                <strong>Vitalidade:</strong> {selectedFicha.vit}
              </p>
              <p>
                <strong>Energia:</strong> {selectedFicha.ene}
              </p>
            </section>
            <section>
              <h2>Outros</h2>
              <p>
                <strong>Tormenta:</strong> {selectedFicha.tor}
              </p>
              <p>
                <strong>Arma:</strong> {selectedFicha.arma}
              </p>
              <p>
                <strong>Armadura:</strong> {selectedFicha.armadura}
              </p>
              <p>
                <strong>Escudo:</strong> {selectedFicha.escudo}
              </p>
            </section>
          </>
        )}
      </section>
      <section id="gf">
        <h1>Gerenciar Fichas</h1>
        <div>
          {fichas.length <= 0 ? (
            <p>Nenhuma ficha encontrada.</p>
          ) : (
            fichas.map((ficha, index) => (
              <section key={index} onClick={() => setSelectedFicha(ficha)}>
                <h2>{ficha.name}</h2>
                <p>
                  <strong>Classe:</strong> {ficha.classe}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFichas((prev) =>
                      prev.filter((value) => value.name !== ficha.name)
                    );
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000"
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                </button>
              </section>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default App;

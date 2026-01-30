document
  .getElementById("formsuperpop")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const dados = {
      colaborador: formData.get("colaborador"),
      reconhecido_por: formData.get("reconhecido_por"),
      valores: formData.getAll("valores[]"),
      observacoes: formData.get("observacoes")
    };

    try {
      const response = await fetch("http://localhost:3000/superpop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
      });

      if (!response.ok) throw new Error();

      alert("Reconhecimento enviado com sucesso!");
      e.target.reset();
    } catch {
      alert("Erro ao enviar. Tente novamente.");
    }
});
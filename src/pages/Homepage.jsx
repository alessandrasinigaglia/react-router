export default function HomePage() {
    return (
    <>
  <main> 
    <div class="container-main">
      <div class="home">
        <div class="row">
          <p>Discover your Tastes</p>
          <h1>We believe good food offers great smiles</h1>
          <p>La cucina non è solo mescolare ingredienti o seguire una ricetta, è un atto d'amore, un'arte che si esprime attraverso sapori, profumi e colori. Ogni piatto racconta una storia, un ricordo, un'emozione. Cucinare è donare un pezzo di sé agli altri, trasformare semplici ingredienti in momenti di gioia e condivisione. Il cibo unisce, scalda l’anima e crea legami indissolubili. In un buon piatto non ci sono solo spezie e aromi, ma sogni, passione e la magia di rendere felici le persone con un solo boccone.</p>
        </div>
      </div>
      <div class="plate">
        <img src="./img/DAR3187-scaled.jpg" alt="Dolce gourmet"/>
      </div>
    </div>
  </main>
  <section id="posts" class="posts">
    <h2>Ultimi Articoli</h2>
    <div class="grid">
      <div class="post-card">
        <img src="public/img/pizza-margherita-500x500.jpg" alt="Pizza"/>
        <div class="post-content">
          <h3>La pizza perfetta fatta in casa</h3>
          <p>Scopri i segreti per una pizza croccante e gustosa.</p>
          <a href="#" class="post-link">Leggi di più →</a>
        </div>
      </div>
      <div class="post-card">
        <img src="public/img/pasta cremosa speck.webp" alt="Pasta"/>
        <div class="post-content">
          <h3>Ricetta di una pasta cremosa irresistibile</h3>
          <p>Una pasta deliziosa pronta in pochi minuti.</p>
          <a href="#" class="post-link">Leggi di più →</a>
        </div>
      </div>
      <div class="post-card">
        <img src="public/img/dolce-al-cucchiaio-al-cioccolato-perugina.jpg" alt="Torta"/>
        <div class="post-content">
          <h3>Come preparare una torta soffice e golosa</h3>
          <p>Dolce perfetto per ogni occasione.</p>
          <a href="#" class="post-link">Leggi di più →</a>
        </div>
      </div>
    </div>
  </section>
  <section class="cta">
    <h2>Iscriviti alla nostra newsletter!</h2>
    <p>Ricevi le ultime ricette direttamente nella tua email.</p>
    <form class="newsletter-form">
      <input type="email"/>
      <button type="submit">Iscriviti</button>
    </form>
  </section>
    </>
    )
}
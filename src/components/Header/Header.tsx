export default function Header() {
  return (
    <header>
      <figure>
        <img alt="profile-picture" />
        <span>{}</span>
      </figure>
      {true ? null : <button>logout</button>}
    </header>
  );
}

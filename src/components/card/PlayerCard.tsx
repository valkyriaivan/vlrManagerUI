export const PlayerCard = (props: { player: any }) => {
  const { player } = props;
  return (
    <div className={`player-card ${player.level}`}>
      <div className="player-photo">
        <img src={player.photo} alt="player"></img>
      </div>
      <div className="player-infobox">
        <img className="team" src={player.team.photo} alt="team" />
        <img
          className="flag"
          src={`https://countryflagsapi.com/png/${player.country}`}
          alt="flag"
        />
      </div>
      <div className="player-info">
        <div className="player-nickname">
          <span>{player.username}</span>
        </div>
        <div className="player-name">
          <span>{player.name}</span>
        </div>
      </div>
      <div className="player-stats">
        <div className="stat-cont">
          <span className="title">ACS</span>
          <br />
          <span className="stat">{player.acs}</span>
        </div>
        <div className="stat-cont">
          <span className="title">K:D</span>
          <br />
          <span className="stat">{player.kd}</span>
        </div>
        <div className="stat-cont">
          <span className="title">ADR</span>
          <br />
          <span className="stat">{player.adr}</span>
        </div>
        <div className="stat-cont">
          <span className="title">KAST</span>
          <br />
          <span className="stat">{player.kast}</span>
        </div>
      </div>
    </div>
  );
};

export default function UserInput({onChange, userInput}) {
    
    return (
      <form id="user-input" action="/submit" method="post">
        <div className="input-group">
        <label htmlFor="">Initial Investment</label>
        <input type="number" required
        value={userInput.initialInvestment}
        onChange={(event) => onChange('initialInvestment',event.target.value)} />
        
        <label htmlFor="">Annual Investment</label>
        <input type="number" required
        value={userInput.annualInvestment}
        onChange={(event) => onChange('annualInvestment',event.target.value)}
        />
        </div>
        <br />

        <div className="input-group">
        <label htmlFor="">Expected Return</label>
        <input type="number" required
        value={userInput.expectedReturn}
        onChange={(event) => onChange('expectedReturn',event.target.value)}/>

        <label htmlFor="">Duration</label>
        <input type="number" required
        value={userInput.duration}
        onChange={(event) => onChange('duration',event.target.value)}/>
        </div>
      </form>

    );
}
export default function({children, buttons, ButtonContainer='menu'}) {
    return (<>
    <ButtonContainer>
    {buttons}
    </ButtonContainer>
    {children}
    </>)
}
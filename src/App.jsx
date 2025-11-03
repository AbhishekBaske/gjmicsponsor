import styled from 'styled-components';

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
  font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #f8fafc;
  min-height: 100vh;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #1e40af, #3b82f6, #60a5fa);
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e2e8f0;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
    padding-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
  }
`;

const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.2;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const SponsorTierSection = styled.div`
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const TierTitle = styled.h2`
  color: #1e293b;
  margin-bottom: 2rem;
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  position: relative;
`;

const TierBadge = styled.span`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2rem;
  background: ${props => 
    props.tier === 'silver' ? 'linear-gradient(135deg, #94a3b8, #cbd5e1)' : 
    props.tier === 'bronze' ? 'linear-gradient(135deg, #cd7f32, #d2691e)' : 
    'linear-gradient(135deg, #059669, #10b981)'};
  color: white;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
  
  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 0.4rem 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  justify-items: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const SponsorCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  max-width: 400px;
  width: 100%;
  text-align: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: ${props => 
      props.tier === 'silver' ? 'linear-gradient(90deg, #94a3b8, #cbd5e1)' : 
      props.tier === 'bronze' ? 'linear-gradient(90deg, #cd7f32, #d2691e)' : 
      'linear-gradient(90deg, #059669, #10b981)'};
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    border-color: ${props => 
      props.tier === 'silver' ? '#94a3b8' : 
      props.tier === 'bronze' ? '#cd7f32' : 
      '#059669'};
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
    max-width: 100%;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 12px;
    margin: 0 0.5rem;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const SponsorImageLink = styled.a`
  display: inline-block;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const SponsorImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: 160px;
  object-fit: contain;
  border-radius: 12px;
  background: #f8fafc;
  padding: 1.5rem;
  border: 2px solid #f1f5f9;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => 
      props.tier === 'silver' ? '#94a3b8' : 
      props.tier === 'bronze' ? '#cd7f32' : 
      '#059669'};
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    max-width: 220px;
    height: 140px;
    padding: 1.25rem;
  }
  
  @media (max-width: 480px) {
    max-width: 200px;
    height: 120px;
    padding: 1rem;
    border-radius: 8px;
  }
`;

const SponsorName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;

const SponsorDescription = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.5;
    text-align: left;
  }
`;

const App = () => {
    return(
        <Container>
            <Header>
                <MainTitle>GJMIC-2025 Sponsors</MainTitle>
                <Subtitle>
                    We gratefully acknowledge the generous support of our sponsors who make this conclave possible
                </Subtitle>
            </Header>
            
            <SponsorTierSection>
                <div style={{ textAlign: 'center' }}>
                    <TierBadge tier="silver">Silver Sponsors</TierBadge>
                </div>
                <CardsGrid>
                    <SponsorCard tier="silver">
                        <SponsorImageLink 
                            href="https://www.nclcil.in" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <SponsorImage 
                                tier="silver"
                                src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/NCL%20LOGO.jpg" 
                                alt="NCL Logo" 
                            />
                        </SponsorImageLink>
                        <SponsorName>Northern Coalfields Limited</SponsorName>
                        <SponsorDescription>
                            Established in 1985, NCL is a wholly owned subsidiary of Coal India Limited, operating ten mechanized opencast coal mines in the Singrauli coalfield. The company produces over 122 million tonnes of coal annually and supplies power to major thermal plants across India.
                        </SponsorDescription>
                    </SponsorCard>
                    <SponsorCard tier="silver">
                        <SponsorImageLink 
                            href="https://www.centralcoalfields.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SponsorImage 
                                tier="silver"
                                src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/CCL%20Logo%202024.jpg"
                                alt="CCL Logo"
                            />
                        </SponsorImageLink>
                        <SponsorName>Central Coalfields Limited</SponsorName>
                        <SponsorDescription>
                            Established in 1975, CCL is a subsidiary of Coal India Limited and a Category-I Miniratna company headquartered in Ranchi, Jharkhand. Operating 43 mines across 7 coalfields including East Bokaro, West Bokaro, and Karanpura, CCL produces coal for thermal power generation and maintains 7 washeries for coal processing.
                        </SponsorDescription>
                    </SponsorCard>
                </CardsGrid>
            </SponsorTierSection>
            
            <SponsorTierSection>
                <div style={{ textAlign: 'center' }}>
                    <TierBadge tier="bronze">Bronze Sponsors</TierBadge>
                </div>
                <CardsGrid>
                    <SponsorCard tier="bronze">
                        <SponsorImageLink 
                            href="https://www.nlcindia.in" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <SponsorImage 
                                tier="bronze"
                                src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/NLCIL%20Logo%20CMYK_.png" 
                                alt="NLC India Limited Logo" 
                            />
                        </SponsorImageLink>
                        <SponsorName>NLC India Limited</SponsorName>
                        <SponsorDescription>
                            Incorporated in 1956, NLC India is a central public sector undertaking that annually produces about 30 million tonnes of lignite from opencast mines at Neyveli and Barsingsar. The company operates thermal power stations with an aggregate capacity of 4,240 MW and has diversified into renewable energy with 1,404 MW solar and 51 MW wind power installations.
                        </SponsorDescription>
                    </SponsorCard>
                </CardsGrid>
            </SponsorTierSection>
            
            <SponsorTierSection>
                <div style={{ textAlign: 'center' }}>
                    <TierBadge tier="other">Supporting Partners</TierBadge>
                </div>
                <CardsGrid>
                    <SponsorCard tier="other">
                        <SponsorImageLink 
                            href="https://www.hindalco.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <SponsorImage 
                                tier="other"
                                src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/Hindalco_3D_logo_Aw%20(1).webp" 
                                alt="Hindalco Industries Logo" 
                            />
                        </SponsorImageLink>
                        <SponsorName>Hindalco Industries Limited</SponsorName>
                        <SponsorDescription>
                            Established in 1958, Hindalco is a subsidiary of the Aditya Birla Group and a leading Indian aluminium and copper manufacturing company. Through its subsidiary Novelis, it became the world's largest rolled-aluminium producer following the $6 billion acquisition in 2007.
                        </SponsorDescription>
                    </SponsorCard>
                    
                    <SponsorCard tier="other">
                        <SponsorImageLink 
                            href="https://www.mahanadicoal.in" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <SponsorImage 
                                tier="other"
                                src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/MCL_English.jpg" 
                                alt="Mahanadi Coalfields Limited Logo" 
                            />
                        </SponsorImageLink>
                        <SponsorName>Mahanadi Coalfields Limited</SponsorName>
                        <SponsorDescription>
                            Established in 1992, MCL is one of the eight subsidiaries of Coal India Limited and operates coal mines across Odisha. The company has become Coal India's largest coal-producing subsidiary with over 203 million tonnes annual production and operates seven open-cast and three underground mines.
                        </SponsorDescription>
                    </SponsorCard>
                    <SponsorCard tier="other">
                        <SponsorImageLink 
                            href="https://sharprojects.in/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <SponsorImage 
                                tier="other"
                                src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/Logo%20SHAR.jpg" 
                                alt="SHAR Projects Logo" 
                            />
                        </SponsorImageLink>
                        <SponsorName>SHAR Projects Private Limited</SponsorName>
                        <SponsorDescription>
                            Founded in 2023 and headquartered in Hyderabad, SHAR Projects specializes in mining, construction, road development, and railway infrastructure using cutting-edge technology and sustainable practices.
                        </SponsorDescription>
                    </SponsorCard>
                </CardsGrid>
            </SponsorTierSection>
        </Container>
    )
}

export default App
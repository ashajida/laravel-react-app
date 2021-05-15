import styled from 'styled-components';
import { Wrapper as ContentWrapper, Container as ContentContainer } from '../extend';

export const Section = styled.section``;
export const Wrapper = styled(ContentWrapper)``;
export const Container = styled(ContentContainer)``;
export const Users = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 15px;
`;

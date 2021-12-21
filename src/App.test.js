import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import Header from './header'
import Search from './search'
import Navigation from './nav'


test('renders title from app', () => {
    render(<App />);
    const title = screen.getByText(/Pelis - App/i);
    expect(title).toBeInTheDocument();
});

test('Exits Header info into file header.js', () => {
    render(<Header />);
    const titleSerie = screen.getByText(/esta es el header/i);
    expect(titleSerie).toBeInTheDocument();
});


test('Exist Search into App', () => {
    render(<Search />);
    const search = screen.getByPlaceholderText(/Busca tu serie anime favoritos/i);
    const wordSearch = screen.getByText(/Buscar/i);
    expect(wordSearch).toBeInTheDocument();
});

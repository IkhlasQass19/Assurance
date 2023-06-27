import Login from './views/dashboard/auth/sign-in';
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
it("submits username and password", () => {
  const onSubmit = jest.fn();
  const { getByLabelText, getByText } = render(
    <MemoryRouter>
      <Login onSubmit={onSubmit} />
    </MemoryRouter>
  );
  const usernameInput = getByLabelText('Login');
  const passwordInput = getByLabelText('Mot de passe');
  const submitButton = getByText('Se Connecter');
  fireEvent.change(usernameInput, { target: { value: 'ikhlas' } });
  fireEvent.change(passwordInput, { target: { value: 'qassimi' } });
  fireEvent.click(submitButton);
  console.log(usernameInput);
  console.log(passwordInput);
});


const mockAxios = new MockAdapter(axios);

describe('Axios working', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('Axios working with correct', async () => {
    const user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      changepass: 'TRUE'
    };
    mockAxios.onPost('http://localhost:8082/api/v1/user/SignIn').reply(200, user);

    /*render(<MemoryRouter>
      <Login onSubmit={onSubmit}/>
    </MemoryRouter>);

    fireEvent.change(screen.getByLabelText('Login'), { target: { value: 'johndoe' } });
    fireEvent.change(screen.getByLabelText('Mot de passe'), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: 'Se Connecter' }));

    await waitFor(() => {
      expect(screen.getByText('Se Connecter')).toBeInTheDocument();
      expect(window.sessionStorage.getItem('user')).toEqual(JSON.stringify(user));*/
  });
});

it('Axios working with wrong data', async () => {
  mockAxios.onPost('http://localhost:8082/api/v1/user/SignIn').reply(401);

  /* render(<MemoryRouter>
     <Login onSubmit={onSubmit}/>
   </MemoryRouter>);

   fireEvent.change(screen.getByLabelText('Login'), { target: { value: 'johndoe' } });
   fireEvent.change(screen.getByLabelText('Mot de passe'), { target: { value: 'wrongpassword' } });
   fireEvent.click(screen.getByRole('button', { name: 'Se Connecter' }));

   await waitFor(() => {
     expect(screen.getByText('Login ou mot de passe incorrect')).toBeInTheDocument();
     expect(window.sessionStorage.getItem('user')).toBeNull();*/
});

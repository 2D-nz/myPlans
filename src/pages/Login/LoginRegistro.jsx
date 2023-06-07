import "./styles.css";

function LoginRegistro() {
	return (
		<div>
			<main class="TelaLogin">
				<section>
					<div class="login">
						<div class="login_entrar">Entrar</div>
						<div class="login_criarconta">Criar uma conta</div>
						<div class="login_emailtelefone">E-mail ou Telefone</div>
						<div class="login_rectangle_email"></div>
						<div class="login_senha">Senha</div>
						<div class="login_rectangle_senha"></div>
						<div class="login_esqueceuasenha">Esqueceu sua senha?</div>
						<div class="login_retangle_cliquepentrar"></div>
						<div class="login_cliquepentrar">Clique para entrar</div>
					</div>
				</section>
			</main>
			<main class="TelaRegistro">
				<section>
					<div class="registre-se">
						<div class="registre-se_entrar">Entrar</div>
						<div class="registre-se_criarConta">Criar uma conta</div>
						<div class="registre-se_email">E-mail</div>
						<div class="registre-se_email_rectangle"></div>
						<div class="registre-se_criarConta_nomeCompleto">Nome Completo</div>
						<div class="registre-se_criarConta_nomeCompleto_rectangle"></div>
						<div class="registre-se_criarConta_pais">País</div>
						<div class="registre-se_criarConta_pais_rectangle"></div>
						<div class="registre-se_criarConta_celular">Celular</div>
						<div class="registre-se_criarConta_celular_rectangle"></div>
						<div class="registre-se_criarConta_nascimento">
							Data de Nascimento
						</div>
						<div class="registre-se_criarConta_nascimento_rectangle_dia"></div>
						<div class="registre-se_criarConta_nascimento_rectangle_mes"></div>
						<div class="registre-se_criarConta_nascimento_rectangle_ano"></div>
						<div class="registre-se_criarConta_senha">Senha</div>
						<div class="registre-se_criarConta_senha_rectangle"></div>
						<div class="registre-se_criarConta_repetirSenha">
							Repita a senha
						</div>
						<div class="registre-se_criarConta_repetirSenha_rectangle"></div>
						<div class="registre-se_criarConta_registre-se_rectangle"></div>
						<div class="registre-se_criarConta_registre-se">Registre-se</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default LoginRegistro;

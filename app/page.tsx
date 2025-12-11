"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Zap,
  Wrench,
  Shield,
  Clock,
  Star,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
    mensagem: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { nome, telefone, email, servico, mensagem } = formData;
    const subject = encodeURIComponent(
      "Solicitação de Orçamento - ERB Elétrica"
    );
    const body = encodeURIComponent(
      `Nome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}\nServiço: ${servico}\nMensagem: ${mensagem}`
    );
    const mailtoUrl = `mailto:contato@erbeletrica.com.br?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-0">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed md:sticky top-0 left-0 right-0 w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo à esquerda */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logot.png"
              alt="ERB Elétrica Logo"
              width={100}
              height={100}
              className="w-14 h-14 md:w-12 md:h-12"
            />
          </div>

          {/* Navegação alinhada à direita em telas maiores */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#servicos"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </a>
            <a
              href="mailto:contato@erbeletrica.com.br"
              className="inline-block"
            >
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Orçamento Grátis
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Mais de 15 anos de experiência
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Serviços Elétricos de{" "}
            <span className="text-secondary">Confiança</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Instalações, manutenção e reparos elétricos para residências e
            empresas. Segurança e qualidade garantidas em todos os nossos
            serviços.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+5511974575827" className="inline-block">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora
              </Button>
            </a>
            <a
              href="#contato"
              className="inline-block"
            >
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Serviços
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Oferecemos soluções completas em serviços elétricos com qualidade
              e segurança
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Instalações Elétricas</CardTitle>
                <CardDescription>
                  Instalações completas para residências e empresas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Quadros elétricos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Tomadas e interruptores
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Iluminação LED
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Cabeamento estruturado
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Manutenção</CardTitle>
                <CardDescription>
                  Manutenção preventiva e corretiva
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Inspeção elétrica
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Troca de disjuntores
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Limpeza de quadros
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Teste de aterramento
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Emergências 24h</CardTitle>
                <CardDescription>
                  Atendimento de emergência disponível 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Curto-circuito
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Falta de energia
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Problemas urgentes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Atendimento rápido
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Por que escolher a ERB Elétrica?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Somos uma empresa especializada em serviços elétricos com mais
                de 15 anos de experiência no mercado. Nossa equipe é formada por
                profissionais qualificados e certificados.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Pontualidade</h3>
                    <p className="text-sm text-muted-foreground">
                      Sempre no horário
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Segurança</h3>
                    <p className="text-sm text-muted-foreground">
                      Normas técnicas
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Star className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Qualidade</h3>
                    <p className="text-sm text-muted-foreground">
                      Materiais premium
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Garantia</h3>
                    <p className="text-sm text-muted-foreground">12 meses</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Depoimentos</h3>
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border">
                  <div className="flex items-center mb-3">
                    <div className="flex text-secondary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    "E.R.B é empresa seria, cuidadosa, serviço de qualidade
                    fizemos toda a instalação da minha casa, retiramos a antiga,
                    o serviço foi feito com material de boa procedência, a
                    execução dentro do prazo estimado, trouxe economia, houve
                    estratégia com toda repetição do quadro de disjuntores, olha
                    só agradecer, não foi um gasto foi; investimento! Chega de
                    dor de cabeça obrigado Everton e equipe Deus abençoe
                    grandemente"
                  </p>
                  <p className="font-semibold">Alex Peixoto</p>
                </div>

                <div className="bg-background p-6 rounded-lg border">
                  <div className="flex items-center mb-3">
                    <div className="flex text-secondary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    "Ele fez a substituição do rolamento da minha bomba elétrica
                    manutenção e pintura do mesmo ficou excelente"
                  </p>
                  <p className="font-semibold">Adão Sotareli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entre em Contato
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Solicite seu orçamento gratuito ou tire suas dúvidas conosco
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-muted-foreground">(11) 97457-5827</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">E-mail</h4>
                    <p className="text-muted-foreground">
                      contato@erbeletrica.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Endereço</h4>
                    <p className="text-muted-foreground">
                      Avenida Doutor Frederico Martins da Costa Carvalho, 240
                      <br />
                      São Paulo - SP, 03984-140
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Solicite um Orçamento</CardTitle>
                <CardDescription>
                  Preencha o formulário e entraremos em contato
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Nome</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Insira seu nome"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Telefone</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Insira seu telefone"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Serviço</label>
                  <select
                    name="servico"
                    value={formData.servico}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option>Selecione o serviço</option>
                    <option>Instalação Elétrica</option>
                    <option>Manutenção</option>
                    <option>Emergência</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Mensagem</label>
                  <textarea
                    rows={4}
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Descreva seu projeto ou necessidade..."
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Enviar Solicitação
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logot.png"
                  alt="ERB Elétrica Logo"
                  width={30}
                  height={30}
                />
                <span className="text-xl font-bold">ERB Elétrica</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Serviços elétricos de qualidade com segurança e confiabilidade.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Instalações Elétricas</li>
                <li>Manutenção</li>
                <li>Emergências 24h</li>
                <li>Consultoria</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>(11) 97457-5827</li>
                <li>contato@erbeletrica.com.br</li>
                <li>São Paulo - SP</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Horário</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Segunda a Sexta: 8h às 17h</li>
                <li>Sábado: 8h às 12h</li>
                <li>"Emergências: 24h"</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/80">
              © 2025 ERB Elétrica. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

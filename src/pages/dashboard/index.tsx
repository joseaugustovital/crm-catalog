import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartData {
  options: ApexOptions;
  series: {
    name: string;
    data: number[];
  }[];
}

const DashboardPage = () => {
  const [chartData] = useState<ChartData>({
    options: {
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false
        },
        background: 'transparent'
      },
      colors: ['#007FFF', '#FE0089'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [50, 100]
        }
      },
      grid: {
        borderColor: '#27272A',
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        categories: ['Abr', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: '#71717A'
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#71717A'
          },
          formatter: (value: number) => {
            return `R$ ${value}M`;
          }
        }
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false
        }
      },
      legend: {
        show: false
      }
    },
    series: [
      {
        name: 'Propostas',
        data: [1.2, 3.0, 2.0, 4.8, 3.8, 3.0]
      },
      {
        name: 'Negociações',
        data: [2.0, 1.0, 4.0, 2.5, 2.0, 2.0]
      }
    ]
  });

  const stats = [
    {
      title: 'Total de Vendas',
      value: 'R$ 45.850',
      change: '+12,5%',
      previousValue: 'Mês Anterior: R$ 40.750'
    },
    {
      title: 'Leads Ativos',
      value: '245',
      change: '+18,2%',
      previousValue: 'Mês Anterior: 207'
    },
    {
      title: 'Taxa de Conversão',
      value: '12,5%',
      change: '-2,1%',
      previousValue: 'Mês Anterior: 14,6%'
    },
    {
      title: 'Ticket Médio',
      value: 'R$ 1.850',
      change: '+5,3%',
      previousValue: 'Mês Anterior: R$ 1.757'
    }
  ];

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-6 h-[calc(100vh-32px)]">
        {/* Coluna da Esquerda - Gráfico */}
        <div className="col-span-2 grid grid-rows-[auto_1fr] gap-6">
          <div className="bg-background-card rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-text-primary">Evolução de Vendas</h2>
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-background hover:bg-background-elevated transition-colors duration-300">
                  <div className="w-4 h-4 rounded-full bg-chart-blue"></div>
                  <span className="text-sm font-medium text-text-primary">Propostas</span>
                </button>
                <button className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-background hover:bg-background-elevated transition-colors duration-300">
                  <div className="w-4 h-4 rounded-full bg-chart-pink"></div>
                  <span className="text-sm font-medium text-text-primary">Negociações</span>
                </button>
              </div>
            </div>
            {typeof window !== 'undefined' && (
              <Chart
                options={chartData.options}
                series={chartData.series}
                type="area"
                height={280}
              />
            )}
          </div>

          {/* Próximas Atividades */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-text-primary">Reuniões Agendadas</h2>
                <span className="text-sm text-text-secondary">Hoje</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-chart-blue bg-opacity-10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-chart-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-text-primary">Apresentação de Proposta</h3>
                      <p className="text-xs text-text-secondary">14:30 - Empresa ABC</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-chart-blue">Em 2h</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-chart-pink bg-opacity-10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-chart-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-text-primary">Reunião de Alinhamento</h3>
                      <p className="text-xs text-text-secondary">16:00 - Time Comercial</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-chart-pink">Em 4h</span>
                </div>
              </div>
            </div>

            <div className="bg-background-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-text-primary">Leads Recentes</h2>
                <span className="text-sm text-text-secondary">Últimas 24h</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-background-elevated flex items-center justify-center text-text-primary">
                      S
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-text-primary">Softex Tecnologia</h3>
                      <p className="text-xs text-text-secondary">Desenvolvimento de Software</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-status-success">Qualificado</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-background-elevated flex items-center justify-center text-text-primary">
                      D
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-text-primary">DataSys Solutions</h3>
                      <p className="text-xs text-text-secondary">Análise de Dados</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-chart-blue">Novo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna da Direita - Stats e Funil */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-background-card rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-text-secondary">{stat.title}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    stat.change.startsWith('+') 
                      ? 'bg-status-success bg-opacity-10 text-status-success' 
                      : 'bg-status-error bg-opacity-10 text-status-error'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-semibold text-text-primary">{stat.value}</span>
                  <p className="mt-1 text-xs text-text-secondary">{stat.previousValue}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Funil de Vendas */}
          <div className="bg-background-card rounded-xl p-6 flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-text-primary">Funil de Vendas</h2>
              <span className="text-sm text-text-secondary">Este mês</span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-text-secondary">Prospecção</span>
                  <span className="text-text-primary">86</span>
                </div>
                <div className="h-2 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-chart-blue" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-text-secondary">Qualificação</span>
                  <span className="text-text-primary">54</span>
                </div>
                <div className="h-2 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-chart-blue" style={{ width: '62%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-text-secondary">Proposta</span>
                  <span className="text-text-primary">32</span>
                </div>
                <div className="h-2 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-chart-pink" style={{ width: '37%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-text-secondary">Negociação</span>
                  <span className="text-text-primary">18</span>
                </div>
                <div className="h-2 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-chart-pink" style={{ width: '21%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-text-secondary">Fechamento</span>
                  <span className="text-text-primary">12</span>
                </div>
                <div className="h-2 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-status-success" style={{ width: '14%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="text-text-secondary">Taxa de Conversão:</span>
                  <span className="text-text-primary font-medium">14%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-text-secondary">Valor Total:</span>
                  <span className="text-text-primary font-medium">R$ 860.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage; 
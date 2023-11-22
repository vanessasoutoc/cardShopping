import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Button, Card, Icon, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Vendas e Valor Total / Mês',
    },
  },
};

const labels = [ 'Setembro', 'Outubro', 'Novembro'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Vendas',
      data: labels.map(() => 11),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Total Arecadado',
      data: labels.map(() => 9),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const BackIcon = (props: any) => (
  <Icon {...props} name='arrow-back' />
);

const Dashboard = ({ navigation }) => {
  const navigateBack = () => {
    navigation.navigate('Home');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Dashboard' alignment='center' accessoryLeft={BackAction}/>
      <Layout level='3' style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
        <Card>
          <Bar options={options} data={data} />
        </Card>
      </Layout>
    </SafeAreaView>
  );
};

export default Dashboard

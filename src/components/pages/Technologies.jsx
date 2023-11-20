import React from 'react';
import Table from 'react-bootstrap/Table';

function Technologies() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Microsoft</th>
          <th>Open Source</th>
          <th>Mobile</th>
          <th>Frontend</th>
          <th>Big Data</th>
          <th>Java</th>
          <th>AL ML & Data science</th>
          <th>Asynchronus<br /> Messaging</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="./te2pics/microsoft-azure-logo.jpg" alt="llt" /></td>
          <td><img src="./node.jpg" alt="llt" /></td>
          <td><img src="./tech/andriod.jpg" alt="llt" /></td>
          <td><img src="./te2pics/html.jpg" alt="llt" /></td>
          <td><img src="./te2pics/apache-flink.jpg" alt="llt" /></td>
          <td><img src="./te2pics/open-grails-logo.jpg" alt="llt" /></td>
          <td><img src="./te2pics/tensor-flow.jpg" alt="llt" /></td>
          <td><img src="./te2pics/am-rabbit-mq-logo.jpg" alt="llt" /></td>
        </tr>
        <tr>
          <td><img src="./te2pics/sql-server-logo.jpg" alt="llt" /></td>
          <td><img src="./tech/open-drupal-logo.jpg" alt="llt" /></td>
          <td><img src="./tech/ios.jpg" alt="llt" /></td>
          <td><img src="./te2pics/angular.jpg" alt="llt" /></td>
          <td><img src="./te2pics/apache-hbase-logo.jpg" alt="llt" /></td>
          <td><img src="./te2pics/open-hibarnate-logo.jpg" alt="llt" /></td>
          <td><img src="./te2pics/opencv.jpg" alt="llt" /></td>
          <td><img src="./te2pics/am-redis-logo.jpg" alt="llt" /></td>
        </tr>
        <tr>
          <td><img src="./te2pics/share-point-logo.jpg" alt="llt" /></td>
          <td colSpan={2}><img src="./tech/open-magento-logo.jpg" alt="llt" /></td>
          <td><img src="./tech/flutter.jpg" alt="llt" /></td>
          <td><img src="./te2pics/react.jpg" alt="llt" /></td>
          <td><img src="./te2pics/apache-sparck-logo.jpg" alt="llt" /></td>
          <td><img src="./te2pics/open-pring-logo.jpg" alt="llt" /></td>
          <td><img src="./te2pics/ml-kit.jpg" alt="llt" /></td>
          <td><img src="./te2pics/am-kafka-logo.jpg" alt="llt" /></td>
        </tr>
        <tr>
          <td><img src="./te2pics/net-core.jpg" alt="llt" /></td>
          <td><img src="./tech/open-my-sql-logo.jpg" alt="llt" /></td>
          <td><img src="./tech/ionic.jpg" alt="llt" /></td>
          <td><img src="./te2pics/typeScript.jpg" alt="llt" /></td>
          <td><img src="./te2pics/cassandra-logo.jpg" alt="llt" /></td>
          <td><img src="./te2pics/open-struts-logo.jpg" alt="llt" /></td>
          <td><img src="./te2pics/keras.jpg" alt="llt" /></td>
          <td></td>
        </tr>
        <tr>
          <td><img src="./te2pics/microsoft-crm-logo.jpg" alt="llt" /></td>
          <td><img src="./tech/open-php-logo.jpg" alt="llt" /></td>
          <td><img src="./tech/react-native.jpg" alt="llt" /></td>
          <td><img src="./te2pics/svelte.jpg" alt="llt" /></td>
          <td><img src="./te2pics/counchdb-relax-logo.jpg" alt="llt" /></td>
          <td></td>
          <td><img src="./te2pics/blockchain.jpg" alt="llt" /></td>
          <td></td>
        </tr>
        <tr>
          <td><img src="./te2pics/microsoft-mvc-logo.jpg" alt="llt" /></td>
          <td><img src="./tech/open-wordpress-logo.jpg" alt="llt" /></td>
          <td></td>
          <td></td>
          <td><img src="./te2pics/hadoop-logo.jpg" alt="llt" /></td>
          <td></td>
          <td><img src="./te2pics/birt.jpg" alt="llt" /></td>
          <td><img src="./te2pics/am-celery-logo.jpg" alt="llt" /></td>
        </tr>
        <tr>
          <td></td>
          <td><img src="./tech/open-zend-logo.jpg" alt="llt" /></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><img src="./te2pics/mongo-db-logo-new.jpg" alt="llt" /></td>
          <td><img src="./te2pics/am-airflow-logo.jpg" alt="llt" /></td>
        </tr>
        <tr>
          <td></td>
          <td><img src="./tech/postgresql.jpg" alt="llt" /></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Technologies;
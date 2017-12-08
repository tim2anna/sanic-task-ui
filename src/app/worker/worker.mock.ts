import Mock from 'mockjs';

const WorkerMock = {
  'GET /api/workers' (req) {
    return Mock.mock({
      'status': 'success',
      'message': '成功',
      'data': {
        'total': 5,
        'results|5': [{
          'id': '@guid',
          'name': 'worker-@string("number", 1, 1)',
          'status|1': [
            'WorkerStatus.STARTED',
            'WorkerStatus.BUSY',
            'WorkerStatus.IDLE'
          ],
          'pid': '@natural(10000, 20000)'
        }],
      },
    });
  },
};

export { WorkerMock };

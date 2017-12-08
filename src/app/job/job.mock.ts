import Mock from 'mockjs';

const QueueMock = {
  'GET /api/jobs' (req) {
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
          'count': '@natural(60, 100)',
        }],
      },
    });
  },
};

export { QueueMock };

import Mock from 'mockjs';

const DashboardMock = {
  'GET /api/dashboard/worker_cards' (req) {
    const response = Mock.mock({
      'status': 'success',
      'message': '成功',
      'data|1-5': [{
        'id': '@guid',
        'name':'worker-@string("number", 1, 1)',
        "status|1": [
          "WorkerStatus.STARTED",
          "WorkerStatus.BUSY",
          "WorkerStatus.IDLE"
        ],
      }]
    });
    return response
  },
  'GET /api/dashboard/worker_table' (req) {
    const response = Mock.mock({
      'status': 'success',
      'message': '成功',
      'data|1-5': [{
        'id': '@guid',
        'name':'worker-@string("number", 1, 1)',
        "status|1": [
          "WorkerStatus.STARTED",
          "WorkerStatus.BUSY",
          "WorkerStatus.IDLE"
        ],
        'pid': '@natural(10000, 20000)'
      }]
    });
    return response
  },
  'GET /api/dashboard/recent_exception_jobs' (req) {
    const response = Mock.mock({
      'status': 'success',
      'message': '成功',
      'data|1-5': [{
        'id': '@guid',
        'desc':"__main__.count_words_at_url('http:\/\/nvie.com')",
        "start_time":"@date() @time()",
        "exc_info":"ValueError: 123\nTraceback (most recent call last):\n  File \"\/Users\/apple\/kaisa\/sanic-task\/sanic_task\/worker.py\", line 380, in perform_job\n    rv = job.perform()\n  File \"\/Users\/apple\/kaisa\/sanic-task\/sanic_task\/job.py\", line 286, in perform\n    self._result = self._execute()\n  File \"\/Users\/apple\/kaisa\/sanic-task\/sanic_task\/job.py\", line 293, in _execute\n    return self.func(*self.args, **self.kwargs)\n  File \"\/Users\/apple\/kaisa\/sanic-task\/manage.py\", line 20, in count_words_at_url\n    raise ValueError(123)\nValueError: 123\n",
      }]
    });
    return response
  },
  'GET /api/dashboard/job_numbers' (req) {
    const response = Mock.mock({
      'status': 'success',
      'message': '成功',
      'data': {
        'running': '@natural(60, 100)',
        'enqueue': '@natural(60, 100)',
        'failure': '@natural(60, 100)',
        'success': '@natural(60, 100)',
      }
    });
    return response
  },
}

export { DashboardMock };

package org.innox.model;

public class ApiResponse<T> {
	private int status;
	private String message;
	private T result;

	public ApiResponse(int status, String message, T result) {
		this.status = status;
		this.message = message;
		this.result = result;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getResult() {
		return result;
	}

	public void setResult(Object result) {
//        this.result = result;
	}

	public ApiResponse(int status, T result) {
		this.result = result;
		this.status = 0;
	}

	public static ApiResponse<Object> ok(Object result) {
		return new ApiResponse<>(0, result);
	}
}

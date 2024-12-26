<div className="comments">
                  {data.results.comments &&
                    data.results.comments.map((comment, index) => {
                      return (
                        <div key={comment.id} className="comment">
                          <div className="commentImage">
                            <img src={comment.user.image} alt="" />
                          </div>
                          <div className="commentDesc">
                            <div className="nameAndDate">
                              <span>
                                {comment.user.first_name +
                                  " " +
                                  comment.user.last_name}
                              </span>
                              <span>
                                {new Date(comment.created_at).getDate()}.
                                {new Date(comment.created_at).getMonth() + 1}.
                                {new Date(comment.created_at).getFullYear()}
                              </span>
                            </div>
                            <div className="commentTitle">{comment.text}</div>
                            <div className="btns">
                              <div className="like">
                                <span>
                                  <BiLike />
                                </span>
                                <span>{comment.like}</span>
                              </div>
                              <div className="disLike">
                                <span>
                                  <BiDislike />
                                </span>
                                <span>{comment.dislike}</span>
                              </div>
                              <button onClick={() => handleActive(index)}>
                                Javob yozish
                              </button>
                            </div>
                            {/*  */}
                            <div className={replayComment == index ? "replyForm" : "replyNone"}>
                              <div className="replyCommentImage">
                                <img src={comment.user.image} alt="" />
                              </div>
                              <form ref={replyCommentForm}>
                                <input ref={replyCommentText} type="text" placeholder="kommentariya..."/>
                                <div className="replyBtns">
                                  <button type="button" onClick={()=>setReplayComment(-1)}>Bekor qilish</button>
                                  <button type="submit" onClick={()=>addComment(comment.id)}>Yuborish</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>